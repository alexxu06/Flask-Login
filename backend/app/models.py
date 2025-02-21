from sqlalchemy import ForeignKey, String, Integer, Boolean
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app import db
from typing import Optional, List
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    __tablename__ = "user_account"

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String, index=True, unique=True)
    email: Mapped[str] = mapped_column(String, index=True, unique=True)
    password: Mapped[Optional[str]] = mapped_column(String)

    def __repr__(self):
        return "<User {}>".format(self.username) 