const db = require('./db');

const User = db.define('user', {
  name: {
    type: db.Sequelize.STRING,
  },
  bio: {
    type: db.Sequelize.TEXT,
  },
  rank: {
    type: db.Sequelize.INTEGER,
  },
});

module.exports = User;
