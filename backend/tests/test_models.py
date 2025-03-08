import pytest

def test_new_user(test_user):
    assert test_user.email == "test@gmail.com"
    assert test_user.username == "test"
    assert test_user.admin == True
    assert test_user.check_password("123")