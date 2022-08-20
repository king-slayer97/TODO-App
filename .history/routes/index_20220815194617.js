const express = require('express');

const router = express.Router();

router.get('/',require('../controllers/home_controller').homePage);
router.post('/create-task',require('../controllers/createTask_controller').createTask)

module.exports = router;