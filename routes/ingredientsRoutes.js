const router = require('express').Router()

const controller = require('../controllers/ingredientsController.js')

router.get('/:id', (req, res) => {
  controller.getOne(req, res)
})

router.get('/', (req, res) => {
  controller.getAll(req, res)
})

router.post('/', (req, res) => {
  controller.create(req, res)
})

module.exports = router

