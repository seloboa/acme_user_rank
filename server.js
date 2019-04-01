const express = require('express');
const app = express();
const path = require('path');
const db = require('./src/db/db');
const User = require('./src/db/User');

const port = process.env.PORT || 3000;

app.get('/app.js', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'dist', 'main.js'))
);

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'index.html'))
);

app.get('/api/users', async (req, res, next) => {
  try {
    await db.sync();
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

app.post('/api/users',async(req,res,next)=>{
  try{
    await db.sync();
    const newUser = await User.create(req.body);
    console.log(newUser);
    res.json(newUser);
  }catch(err){
    next(err);
  }
})

app.listen(port, () => console.log(`listening on port ${port}`));
