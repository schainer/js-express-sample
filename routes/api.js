'use strict';
const routeGroup = require('express').Router;
module.exports = (router) => {
  // Default Routes
  const defaultRouter = () => {
    const router = routeGroup({ mergeParams: true });
    router.route('/').get((req, res) => {
      return res.send('default route!');
    });
    return router;
  };
  router.use('/default', defaultRouter());
  return router;
};
