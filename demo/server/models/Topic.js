const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Topic = sequelize.define('Topic', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Topic;
