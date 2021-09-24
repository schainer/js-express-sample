'use strict';
const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '../config/config'))[env];
const User = require('./User');
const Comment = require('./Comment');
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

User.init();
Comment.init();

module.exports = db;
