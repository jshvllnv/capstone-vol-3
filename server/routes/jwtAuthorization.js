const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

//Register Student Email
router.post("/register/student/email", async (req, res) => {
  try {
    //1. Destructure the req.body ( firstname, lastname, email, password)

    const {
      student_first_name,
      student_last_name,
      student_email_address,
      student_password,
    } = req.body;

    //2. Check if user exists (if user exists, throw error)

    const studentUser = await pool.query(
      "SELECT * FROM students WHERE student_email_address = $1",
      [student_email_address]
    );

    if (studentUser.rows.length !== 0) {
      return res.status(401).json("User already exists");
    }
    //3. bcrypt user password

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const bcryptPassword = await bcrypt.hash(student_password, salt);

    //4. enter the new user inside our database

    const newStudentUser = await pool.query(
      "INSERT INTO students (student_first_name, student_last_name, student_email_address, student_password) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        student_first_name,
        student_last_name,
        student_email_address,
        bcryptPassword,
      ]
    );

    //5. generating our JWT

    const token = jwtGenerator(newStudentUser.rows[0].user_id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

//Register Student Phone Number
router.post("/register/student/phone", async (req, res) => {
  try {
    //1. Destructure the req.body ( firstname, lastname, email, password)

    const {
      student_first_name,
      student_last_name,
      student_phone_number,
      student_password,
    } = req.body;

    //2. Check if user exists (if user exists, throw error)

    const studentUser = await pool.query(
      "SELECT * FROM students WHERE student_phone_number = $1",
      [student_phone_number]
    );

    if (studentUser.rows.length !== 0) {
      return res.status(401).json("User already exists");
    }
    //3. bcrypt user password

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const bcryptPassword = await bcrypt.hash(student_password, salt);

    //4. enter the new user inside our database

    const newStudentUser = await pool.query(
      "INSERT INTO students (student_first_name, student_last_name, student_phone_number, student_password) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        student_first_name,
        student_last_name,
        student_phone_number,
        bcryptPassword,
      ]
    );

    //5. generating our JWT

    const token = jwtGenerator(newStudentUser.rows[0].user_id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

// Register School Email
router.post("/register/school/email", async (req, res) => {
  try {
    //1. Destructure the req.body ( firstname, lastname, email, password)

    const { school_name, school_email_address, school_password } = req.body;

    //2. Check if user exists (if user exists, throw error)

    const schoolUser = await pool.query(
      "SELECT * FROM schools WHERE school_email_address = $1",
      [school_email_address]
    );

    if (schoolUser.rows.length !== 0) {
      return res.status(401).json("User already exists");
    }
    //3. bcrypt user password

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const bcryptPassword = await bcrypt.hash(school_password, salt);

    //4. enter the new user inside our database

    const newSchoolUser = await pool.query(
      "INSERT INTO schools (school_name, school_email_address, school_password) VALUES ($1, $2, $3) RETURNING *",
      [school_name, school_email_address, bcryptPassword]
    );

    //5. generating our JWT

    const token = jwtGenerator(newSchoolUser.rows[0].user_id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { user_username, user_password } = req.body;

    //check if user is student
    const studentUser = await pool.query(
      "SELECT * FROM students WHERE student_email_address = $1 OR student_phone_number = $1;",
      [user_username]
    );

    if (studentUser.rows.length > 0) {
      // Student found, validate password
      const validPassword = await bcrypt.compare(
        user_password,
        studentUser.rows[0].student_password
      );

      if (!validPassword) {
        return res.status(401).json("Username or Password is incorrect");
      }

      // Password is valid, generate token
      const token = jwtGenerator(studentUser.rows[0].user_id);
      return res.json({ token });
    }

    //check if user is school
    const schoolUser = await pool.query(
      "SELECT * FROM schools WHERE school_email_address = $1;",
      [user_username]
    );

    if (schoolUser.rows.length > 0) {
      // School found, validate password
      const validPassword = await bcrypt.compare(
        user_password,
        schoolUser.rows[0].school_password
      );

      if (!validPassword) {
        return res.status(401).json("Username or Password is incorrect");
      }

      // Password is valid, generate token
      const token = jwtGenerator(schoolUser.rows[0].user_id);
      return res.json({ token });
    }

    // If no user is found in either students or schools
    return res.status(401).json("User does not exist");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
