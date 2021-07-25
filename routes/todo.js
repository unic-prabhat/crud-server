const express = require('express');
const router = express.Router();

const TodoController = require('../controllers/TodoController');

router.get('/', TodoController.index);
router.post('/store', TodoController.store);
router.get('/:id', TodoController.view);
router.get('/delete/:id', TodoController.removeid);
router.post('/update/todo', TodoController.update)

module.exports = router;
