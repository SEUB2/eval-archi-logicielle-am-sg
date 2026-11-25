const data = require('../data')

function getRanking(req, res) {
    res.json(data.ranking);
}

module.exports = {getRanking}