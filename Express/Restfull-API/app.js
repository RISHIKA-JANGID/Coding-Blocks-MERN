const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const users = require('./datas/users');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/users', (req, res) => {
  res.render('user', { users });
});

app.get('/user', (req, res) => {
  res.redirect('/users');
});

app.get('/users/new', (req, res) => {
  res.render('new');
});

app.post('/users', (req, res) => {
  const { username, password, age, city } = req.body;
  if (username && password && age && city) {
    users.push({ id: String(Date.now()), username, password, age: Number(age), city });
  }
  res.redirect('/users');
});
app.get('/users/:id/edit', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);
  if (user) {
    res.render('edit', { user });
  } else {
    res.status(404).send('User not found');
  }
});
app.post('/users/:id', (req, res) => {
  const { id } = req.params;
  const { username, password, age, city } = req.body;
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex !== -1) {
    users[userIndex] = { id, username, password, age: Number(age), city };
    res.redirect('/users');
  } else {
    res.status(404).send('User not found');
  }
});
app.post('/users/:id/delete', (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.redirect('/users');
  } else {
    res.status(404).send('User not found');
  }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});