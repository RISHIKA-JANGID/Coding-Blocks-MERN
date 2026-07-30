const express = require('express');
const app = express();
const port = 3000;
const todos = ["Game", "Dance", "Music", "Movie"];
const cors = require('cors');

app.use(cors());

app.get('/todos', (req, res) => {
    res.json(todos);
});
app.use(express.json());
app.post('/todos', (req, res) => {
    const { todo } = req.body;
    todos.push(todo);
    res.json({ message: 'Todo added successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});