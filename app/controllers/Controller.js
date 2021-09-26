'use strict';
const createError = require('http-errors');

class Controller {
  static asyncHandler(asyncFunc) {
    return async (req, res, next) => {
      await asyncFunc(req, res, next).catch(err => {
        console.error(err);
        next(createError(500));
      });
    };
  }
}

module.exports = Controller;

