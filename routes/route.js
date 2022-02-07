const router = require('express').Router()

const controller = require('../controllers/controller.js')

router.get('/', (req, res) => {
  controller.getAll(req, res)
})

module.exports = server => server.use('/', router);

