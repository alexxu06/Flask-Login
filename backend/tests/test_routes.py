import pytest

# def test_signup(client):
#     response = client.post("/api/signup", json={
#         "email": "test2@gmail.com",
#         "username": "test2",
#         "password": "password",
#         "admin": True,
#     })

#     assert response.status_code == 200

# DOES NOT WORK YET, NEED TO RECREATE APP INITIALIZATION INTO APPLICATION FACTORY

def test_unauthorized_home_access(client):
    response = client.get("/api/home")
    assert response.status_code == 401