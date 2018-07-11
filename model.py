"""
Models and database functions for TRIBE project.
CREDITS: https://github.com/ashleyhsia0/breadcrumbs/blob/master/model.py
"""

from flask_sqlalchemy import SQLAlchemy

import datetime

from sqlalchemy_searchable import make_searchable
import sqlalchemy_utils.types

# This is the connection to the PostgreSQL database; we're getting this through
# the Flask-SQLAlchemy helper library. On this, we can find the `session`
# object, where we do most of our interactions (like committing, etc.)
db = SQLAlchemy()

make_searchable()


##############################################################################
# Model definitions

class User(db.Model):
    """User of TRIBE website."""

    __tablename__ = "user"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_name = db.Column(db.String(100), nullable=False)
    user_email = db.Column(db.String(100), unique=True, nullable=False)
    user_password = db.Column(db.String(100), nullable=False)
    user_type = db.Column(db.String(100), nullable=False)
    user_origin = db.Column(db.String(100), nullable=False)
    # Put name inside TSVectorType definition for it to be fulltext-indexed (searchable)
    search_vector = db.Column(TSVectorType('first_name', 'last_name'))


##############################################################################
# Helper functions

def connect_to_db(app, db_uri=None):
    """Connect the database to our Flask app."""

    # Configure to use our PostgreSQL database
    app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    app.config['SQLALCHEMY_ECHO'] = True
    db.app = app
    db.init_app(app)


def example_data():
    """Create some sample data for testing."""

    Kendall = User(user_email="Kendall@test.com",
                   user_name="Kendall",
                  user_password="admin",
                  user_type="Admin",
                  user_origin="Worked at NSA")

    Tom = User(user_email="Tom@test.com",
               user_name="Tom",
                  user_password="founder1",
                  user_type="Founder",
                  user_origin="Worked at NSA")

    Ivy = User(user_email="Ivy@test.com",
               user_name="Ivy",
                  user_password="founder2",
                  user_type="Founder",
                  user_origin="Worked at NSA")

    db.session.add_all([Kendall, Tom, Ivy])
    db.session.commit()


if __name__ == "__main__":
    # As a convenience, if we run this module interactively, it will leave
    # you in a state of being able to work with the database directly.

    from server import app
    connect_to_db(app)
    print("Connected to DB.")