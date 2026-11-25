const data = require('../data');

function getAllTeams(req, res) {
    res.json(data.teams);
  };

module.exports = {getAllTeams}
  