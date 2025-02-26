from app import app
from flask import request, jsonify
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import current_user
from flask_jwt_extended import jwt_required
from flask_jwt_extended import set_access_cookies
from flask_jwt_extended import unset_jwt_cookies
from app import jwt
from app import db
from app.models import User, Post
from datetime import datetime
from datetime import timedelta
from datetime import timezone

import json

@app.after_request
def refresh_expiring_tokens(response):
    try:
        expiration_time = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        time_to_refresh = datetime.timestamp(now + timedelta(minutes=0.2))
        if time_to_refresh > expiration_time:
            access_token = create_access_token(identity=get_jwt_identity(), additional_claims={"admin": get_jwt()["admin"]})
            set_access_cookies(response, access_token)
        return response
    except (RuntimeError, KeyError):
        return response


# When creating access tokens, I am using the unique id number of each user
# converts identity to string when creating JWT because apparently identity only accepts strings
@jwt.user_identity_loader
def user_identity_loader(callback):
    return str(callback)

# Finds user by id when accessing protected route
@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).one_or_none()

#check if user is authenticated
@app.route("/api/authentication", methods=["GET"])
@jwt_required()
def check_auth():
    return jsonify({"msg": "success"})

@app.route("/api/signup", methods=["POST"])
def signup():
    email = request.json.get("email", None)
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    admin = request.json.get("admin", None)

    if User.query.filter(User.username==username).first():
        return "Username taken", 401
    
    if User.query.filter(User.email==email).first():
        return "Email already in use", 401

    user = User(email=email, username=username, admin=admin)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    response = jsonify({"msg": "successfully signed up"})
    access_token = create_access_token(identity=user.id, additional_claims={"admin": user.admin})
    set_access_cookies(response, access_token)

    return response

@app.route("/api/login", methods=["POST"])
def login():
    username_or_email = request.json.get("username_or_email", None)
    password = request.json.get("password", None)

    user = User.query.filter((User.email==username_or_email) | (User.username==username_or_email)).one_or_none()

    if not user:
        return "User does not exist", 401

    if not user.check_password(password):
        return "Wrong password", 401
    
    response = jsonify({"msg": "successfully logged in"})
    access_token = create_access_token(identity=user.id, additional_claims={"admin": user.admin})
    set_access_cookies(response, access_token)
    return response

@app.route("/api/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successfully"})
    unset_jwt_cookies(response)
    return response

@app.route("/api/home", methods=["GET"])
@jwt_required()
def home():
    username = current_user.username
    admin = get_jwt()["admin"]

    return jsonify({"username": username, "admin": admin})