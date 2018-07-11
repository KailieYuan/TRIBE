
import os

from jinja2 import StrictUndefined

from flask import Flask, render_template, redirect, request, flash, session, jsonify
#from flask_debugtoolbar import DebugToolbarExtension

#from model import User
#from model import connect_to_db, db

app = Flask(__name__, static_folder='assets')
app.config['SECRET_KEY'] = os.environ.get("FLASK_SECRET_KEY", "abcdef")

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/login", methods=["GET"])
def login():
    """Show login form."""
    return render_template("index.html")

'''
@app.route("/login", methods=["POST"])
def login():
    """Log user in if credentials provided are correct."""

    username= request.form.get("username")
    password = request.form.get("password")

    try:
        current_user = db.session.query(User).filter(User.user_name== username,
                                                     User.user_password == password)
    except NoResultFound:
        flash("The email or password you have entered did not match our records. Please try again.", "danger")
        return redirect("/login")

    flash("Welcome {}. You have successfully logged in.".format(User.user_name), "success")

#return redirect("/users/{}".format(current_user.user_id))
    return render_template("profile.html")
    '''

if __name__ == "__main__":
    app.run(debug=True)