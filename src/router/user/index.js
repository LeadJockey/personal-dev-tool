const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/login', controller.loginFormat);
router.get('/logout', controller.logout);
router.post('/login', controller.login);

module.exports = router;
