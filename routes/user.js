const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/UsersController');

router.get('/', UsersController.index);
router.post('/store', UsersController.store);
router.post('/login', UsersController.login);

module.exports = router;
