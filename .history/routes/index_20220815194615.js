const express = require('express');

const router = express.Router();

router.get('/',require('../controllers/home_controller').homePage);
router.post('/create-task',require('../controllers/createTask_controller').)

module.exports = router;