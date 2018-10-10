const express = require('express');
const router = express.Router();
const controller = require('./team.controller');

router.get('/add', controller.addForm);
router.get('/list', controller.teamList);
router.post('/add', controller.add);

module.exports = router;
