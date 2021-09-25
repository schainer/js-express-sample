'use strict';
const routeGroup = require('express').Router;
module.exports = (router) => {
  router.use('default', () => {
    const defaultRouter = routeGroup();
    defaultRouter.get('/', (req, res) => {
      res.send('default router')
    })
    return defaultRouter
  })
  return router
}
