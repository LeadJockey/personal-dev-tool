const path = require('path');
const config = require(path.join(__dirname, '..', '..', 'config'));
const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/login', controller.loginForm);
router.get('/logout', controller.logout);
router.get('/signup', controller.signUpForm);
router.get('/list', config.passport.authenticate, controller.userList);
router.post('/signup', controller.signUp);
router.post('/login', controller.login);

module.exports = router;
