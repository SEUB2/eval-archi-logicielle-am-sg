const express = require('express');
const router = express.Router();
const matchController = require('../controller/matchController');

router.get('/', matchController.getAllMatches);
router.post('/', matchController.createMatch);
router.post('/:id/result', matchController.recordMatchResult);

module.exports = router;
