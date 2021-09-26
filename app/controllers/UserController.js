'use strict';
const Controller = require('./Controller');

class UserController extends Controller {
  static getUser(req, res, next) {
    res.send('hello Controller!');
  }
}

module.exports = UserController;
