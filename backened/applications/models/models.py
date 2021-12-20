from applications import app, db, ma
from datetime import datetime

class Instructor(db.Model):
    instructor_id = db.Column(db.Integer, primary_key=True)
    instructor_name = db.Column(db.String(100))
    instructor_email = db.Column(db.String(100))
    instructor_adi = db.Column(db.String(100))
    instructor_paymentscheme = db.Column(db.String(100))
    instructor_password = db.Column(db.String(100))
    instructor_profilepic = db.Column(db.Text,nullable=False)
    

    def __init__(self,instructor_name,instructor_email,instructor_adi,instructor_paymentscheme,instructor_password,instructor_profilepic):
        self.instructor_name = instructor_name
        self.instructor_email = instructor_email
        self.instructor_adi = instructor_adi
        self.instructor_paymentscheme = instructor_paymentscheme
        self.instructor_password = instructor_password
        self.instructor_profilepic = instructor_profilepic

class InstructorSchema(ma.Schema):
    class Meta:
        fields = ('instructor_id', 'instructor_name', 'instructor_email', 'instructor_adi', 'instructor_paymentscheme', 'instructor_password', 'instructor_profilepic')

instructor_schema = InstructorSchema()
instructor_schema = InstructorSchema(many=True)