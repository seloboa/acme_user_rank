const db = require('./db');
const User = require('./User');

const syncAndSeed = () => {
  db.sync()
    .then(() => {
      return Promise.all([
        User.create({name: 'moe', bio: 'moe is fun', rank: 1}),
        User.create({name: 'lary', bio: 'larry is tall', rank: 2}),
        User.create({name: 'curly', bio: 'curly is big', rank: 2}),
      ]);
    })
    .then(() => {
      console.log('db seeded');
    })
    .then(() => {
      db.close();
      return null;
    })
    .catch(err => console.log(err));
};

syncAndSeed();
