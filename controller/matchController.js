const data = require('../data')
const matchService = require('../service/matchService')
const recalculateRanking = require('../service/rankingService')


  function getAllMatches(req,res){
    res.json(data.matches);
  }
  
  function createMatch(req, res, next) {
    try {
      const { team1Id, team2Id } = req.body || {};
      if (!Number.isSafeInteger(team1Id) || !Number.isSafeInteger(team2Id)) {
        return res.status(400).json({ error: 'Les identifiants des équipes doivent être des entiers.' });
      }
      
      // après les vérifs données, le controleur donne au service, qui fait d'autres validations 
      // (équipe existante etc..), une fois cela fait le service donne au reository pour la persistance.
      const match = matchService.createMatch(team1Id, team2Id);
      res.status(201).json(match);
    } catch (error) {
      next(error); 
    }
  }
  
  async function recordMatchResult(req, res, next) {
    try {
      const { scoreTeam1, scoreTeam2 } = req.body || {};
      if (!Number.isSafeInteger(scoreTeam1) || scoreTeam1 < 0 ||
          !Number.isSafeInteger(scoreTeam2) || scoreTeam2 < 0) {
        return res.status(400).json({ error: 'Les scores doivent etre des entiers positifs ou nuls.' });
      }
  
      const match = await matchService.recordMatchResult(req.params.id, scoreTeam1, scoreTeam2);
      res.json(match);
    } catch (error) {
      next(error); 
    }
  }


module.exports = {getAllMatches, createMatch, recordMatchResult}
  