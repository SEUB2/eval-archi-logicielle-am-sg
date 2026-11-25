const express = require('express');
const router = express.Router();
const teamsController = require('../controller/teamsController');

router.get('/', teamsController.getAllTeams);

module.exports = router;
