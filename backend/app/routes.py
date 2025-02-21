from app import app
import json

@app.route("/")
def index():
    return "hi"