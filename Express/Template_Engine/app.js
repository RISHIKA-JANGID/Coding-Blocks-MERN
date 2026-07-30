const express = require("express");

const app = express();


const PORT = 4000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});
app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});