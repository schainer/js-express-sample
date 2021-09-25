'use strict';
const routeGroup = require('express').Router;
module.exports = (router) => {
  router.use('/default', () => {
    const defaultRouter = routeGroup({mergeParams: true})
    defaultRouter.route('/').get((req, res) => {
      return res.send('default route!')
    })
  })
  return router
}
