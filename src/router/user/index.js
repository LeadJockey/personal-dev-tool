const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/', controller.loginForm);
router.get('/logout', controller.logout);
router.get('/signup', controller.signUpForm);
router.post('/signup', controller.signUp);
router.post('/login', controller.login);

module.exports = router;
