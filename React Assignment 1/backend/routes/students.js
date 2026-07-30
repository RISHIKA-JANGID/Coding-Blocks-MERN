const express = require("express");
const router = express.Router();
const {
    addStudent,
    getStudents,
    updateStudent
} = require("../controllers/studentController");

router.post("/", addStudent);
router.get("/", getStudents);
router.put("/:id", updateStudent);
module.exports = router;