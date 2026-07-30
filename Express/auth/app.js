const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Users = require("./models/users");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/VGU_AUTH")
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
const session = require("express-session");

app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
}));
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/login", (req, res) => {
  res.render("login");
});
let isAuth = (req,res,next)=>{
    if(req.session.user){
        next()
    }else{
        res.redirecr("/login")
    }
}
app.get("/payment",isAuth,(req,res)=>{
    res.render("payment")
})

app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await Users.findOne({ username });

    if (existingUser) {
      return res.send("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Users.create({
      username,
      password: hashedPassword,
    });

    res.redirect("/login");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating user");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Users.findOne({ username });

    if (!user) {
      return res.send("User not found");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.send("Invalid Password");
    }

    // Store user in session
    req.session.user = {
      id: user._id,
      username: user.username
    };

    res.redirect("/");

  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});