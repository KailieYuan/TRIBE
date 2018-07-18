from flask import Flask, render_template, redirect, request, flash
from wtforms import StringField, PasswordField, BooleanField
from flask_wtf import FlaskForm
from wtforms.validators import InputRequired, Email, Length
from flask_bootstrap import Bootstrap

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Thisissupposedtobesecret!'
bootstrap = Bootstrap(app)


class LoginForm(FlaskForm):
    email = StringField('email', validators=[InputRequired(), Length(min=4, max=15)])
    password = PasswordField('password', validators=[InputRequired(), Length(min=8, max=80)])
    remember = BooleanField('remember me')


@app.route("/")
def index():
    form = LoginForm()
    return render_template('index.html', form=form)


@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in if credentials provided are correct."""

    form = LoginForm()

    # this is if its POST
    if form.validate_on_submit():
        email = form.email.data
        password = form.password.data

        if email == "kay@gmail.com" and password == "admin":
            return render_template("profile.html")

        return render_template("errorlogin.html")
    # this is if its GET
    return render_template("index.html", form=form)


if __name__ == "__main__":
    app.run(debug=True)
