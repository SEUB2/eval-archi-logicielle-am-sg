const express = require('express');
const router = express.Router();
const rankingController = require('../controller/rankingController');

router.get('/', rankingController.getRanking);


module.exports = router;
