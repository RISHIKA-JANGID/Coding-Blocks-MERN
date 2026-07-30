const Student = require("../models/Student");

const addStudent = async (req, res) => {
  try {
    const { name, email, course, marks } = req.body;

    if (!name || !email || !course || marks === undefined) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    if (marks < 0 || marks > 100) {
      return res.status(400).json({
        message: "Marks must be between 0 and 100",
      });
    }

    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      return res.status(400).json({
        message: "Email already exists",
        
      });
    }

    const student = await Student.create({
      name,
      email,
      course,
      marks,
    });

    res.status(201).json({
      message: "Student added successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



const updateStudent = async (req, res) => {
  try {
    const { name, email, course, marks } = req.body;

    if (!name || !email || !course || marks === undefined) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    if (marks < 0 || marks > 100) {
      return res.status(400).json({
        message: "Marks must be between 0 and 100",
      });
    }

    const existingStudent = await Student.findOne({
      email,
      _id: { $ne: req.params.id },
    });

    if (existingStudent) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        course,
        marks,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Student updated successfully",
      student: updatedStudent,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  addStudent,getStudents,updateStudent,
};