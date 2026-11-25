const rankingRepository = require('../repository/rankingRepository')

function getRanking(req, res) {
    res.json(rankingRepository.getAllRanking());
}

module.exports = {getRanking}