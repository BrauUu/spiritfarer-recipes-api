const router = require('express').Router()

const controller = require('../controllers/recipesController.js')

router.get('/:bookId', (req, res) => {
  controller.getOne(req, res)
})

router.get('/', (req, res) => {
  controller.getAll(req, res)
})

router.put('/:bookId', (req, res) => {
  controller.update(req, res)
})

router.post('/', (req, res) => {
  controller.create(req, res)
})

module.exports = router

