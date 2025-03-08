import pytest
from app import app as flask_app
from app import db as database
from app.models import User, Post
from datetime import timedelta

@pytest.fixture
def app():
    flask_app.config["TESTING"] = True
    flask_app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(seconds=10) # short for testing purposes

    return flask_app

@pytest.fixture
def db():
    database.drop_all() # clears database before testing 
    database.create_all() # recreates database
    database.session.commit() 

    def finalize():
        database.session.remove() # close database
    
    request.addfinalizer(finalize)
    return database

@pytest.fixture
def client(app):
    return app.test_client()

@pytest.fixture
def test_user():
    user = User(email="test@gmail.com", username="test", admin=True)
    user.set_password("123")
    return user

