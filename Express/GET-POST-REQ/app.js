const express = require("express");

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/abcd", (req, res) => {
    res.render("login");
    
});
app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/abcd", (req, res) => {
    
    res.send("Login successful!");
});