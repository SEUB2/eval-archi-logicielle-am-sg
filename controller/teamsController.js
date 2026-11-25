const teamsRepository = require('../repository/teamsRepository')

function getAllTeams(req, res) {
    res.json(teamsRepository.getAllTeams());
  };

module.exports = {getAllTeams}
  