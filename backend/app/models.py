from sqlalchemy import ForeignKey, String, Integer, Boolean
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import datetime, timezone
from app import db
from typing import Optional, List
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    __tablename__ = "user_account"

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String, index=True, unique=True)
    email: Mapped[str] = mapped_column(String, index=True, unique=True)
    password: Mapped[Optional[str]] = mapped_column(String)
    admin: Mapped[bool] = mapped_column(Boolean, default=False)

    posts: Mapped[list["Post"]] = relationship("Post", backref = "author")

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def __repr__(self):
        return f"<User {self.username}>"


class Post(db.Model):
    __tablename__ = "posts"

    id: Mapped[int] = mapped_column(primary_key=True)
    message: Mapped[str] = mapped_column(String, index=True, unique=False)
    user_id: Mapped[int] = mapped_column(ForeignKey("user_account.id"), index=True)
    time: Mapped[datetime] = mapped_column(index=True, default=lambda: datetime.now(timezone.utc))

    def __repr__(self):
        return f"<User {self.message}>"