CREATE DATABASE capsvol3;

-- create students table

CREATE TABLE students (
student_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
student_first_name VARCHAR(255) NOT NULL,
student_last_name VARCHAR(255) NOT NULL,
student_email_address VARCHAR(255) UNIQUE,
student_phone_number VARCHAR(255) UNIQUE,
student_password VARCHAR(255) NOT NULL
);

CREATE TABLE applications (
application_first_name
)

-- insert dummy students

INSERT INTO students(student_first_name, student_last_name, student_email_address, student_password ) VALUES ('student1', 'dummy', 'student1@email.com', 'stdnt1');

-- create schools table 

CREATE TABLE schools (
school_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
school_name VARCHAR(255) NOT NULL,
school_email_address VARCHAR(255),
school_phone_number VARCHAR(255),
school_password VARCHAR(255) NOT NULL
);