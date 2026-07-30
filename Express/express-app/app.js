const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    res.send(`This is product ${id}.`);
});

app.get("/payment", (req, res) => {
    res.sendFile(__dirname + "/payment.html");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});