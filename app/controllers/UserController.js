'use strict';
const Controller = require('./Controller');
const User = require('../../models/User');

class UserController extends Controller {
  static getUser(req, res, next) {
    res.send('hello Controller!');
  }

  static async addUser(req, res, next) {
    try {
      const user = await User.create({
        name: req.body.name,
        age: req.body.age
      });
      res.json(user);
    } catch (e) {
      throw new Error('create user');
    }
  }

  static async getUserById(req, res, next) {
    try {
      const user = await User.findByPk(req.params.id)
      res.json(user)
    } catch (e) {
      throw new Error('get single user')
    }
  }
}

module.exports = UserController;
