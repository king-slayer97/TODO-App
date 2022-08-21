const express = require('express');
//Creating Express Router
const router = express.Router();


//Route requests
router.get('/',require('../controllers/home_controller').homePage);
router.post('/create-task',require('../controllers/createTask_controller').createTask);
router.post('/delete-task',require('../controllers/deleteTask_controller').deleteTask);

module.exports = router;