const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/students");
dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/students", studentRoutes);
app.get("/", (req, res) => {
    res.send("Student Result API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});