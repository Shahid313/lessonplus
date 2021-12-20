from flask import Flask, jsonify, request, render_template, redirect, url_for
from applications import app, db
from applications.models.models import *
from applications.utils import save_file
from werkzeug.security import generate_password_hash,check_password_hash
from sqlalchemy import text

@app.route("/signup")
def signup():
    return render_template('register.html')


@app.route("/signin", methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        email = request.form.get('useremail')
        password = request.form.get('userpassword')
        if(email == 'shahidkahn11@gmail.com' and password == 'Shahid0001'):
            return redirect(url_for('index'))
    return render_template('login.html')


@app.route("/index")
def index():
    return render_template('index.html')


@app.route("/form_basics", methods=['POST', 'GET'])
def form_basics():
    if request.method == 'POST':
        name = request.form.get('username')
        email = request.form.get('useremail')
        adi = request.form.get('adi')
        paymentscheme = request.form.get('paymentscheme')
        password = request.form.get('userpassword')
        profilepic = request.files['profilepic']
        isSaved,file_name = save_file(profilepic,'profile_images')
        if isSaved:
            new_instructor = Instructor(instructor_name=name, instructor_email=email, instructor_adi=adi, instructor_paymentscheme=paymentscheme, instructor_password=password, instructor_profilepic=file_name)
            db.session.add(new_instructor)
            db.session.commit()
    return render_template('form_basics.html')


@app.route("/add_learner")
def add_learner():
    return render_template('Add_learner.html')


@app.route("/instructors")
def instructors():
    return render_template('instructors.html')

@app.route("/learners")
def learners():
    return render_template('learners.html')
