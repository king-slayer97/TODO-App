const express = require('express');

const router = express.Router();

router.get('/',require('../controllers/home_controller').homePage);
router.

module.exports = router;