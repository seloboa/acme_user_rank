const express = require('express');
const app = express();
const path = require('path');
const db = require('./src/db/db');
const User = require('./src/db/User');

const port = process.env.PORT || 3000;

//data parser
app.use(express.json());

app.get('/app.js', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'dist', 'main.js'))
);

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'index.html'))
);

app.get('/api/users', async (req, res, next) => {
  try {
    await db.sync();
    const users = await User.findAll({order: [['id', 'asc']]});
    res.json(users);
  } catch (err) {
    next(err);
  }
});

app.post('/api/users', async (req, res, next) => {
  try {
    await db.sync();
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    next(err);
  }
});

app.put('/api/users', async (req, res, next) => {
  try {
    await db.sync();
    const newUser = await User.update(req.body, {
      where: {id: req.body.id},
      returning: true,
    });
    res.json(newUser);
  } catch (err) {
    next(err);
  }
});

app.listen(port, () => console.log(`listening on port ${port}`));
