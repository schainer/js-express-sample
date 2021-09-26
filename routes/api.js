'use strict';
const routeGroup = require('express').Router;
const UserController = require('../app/controllers/UserController')
module.exports = (router) => {
  // Default Routes
  const userRouter = () => {
    const router = routeGroup({ mergeParams: true });
    router.route('/').get(UserController.getUser);
    return router;
  };
  router.use('/user', userRouter());
  return router;
};
