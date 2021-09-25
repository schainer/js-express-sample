'use strict';
const router = require('express').Router;
const api = require('./api')
// const web = require('./web')

module.exports = (app) => {
  app.use('api', api(router()))
}
