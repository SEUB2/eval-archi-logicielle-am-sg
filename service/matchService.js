const teamRepository = require('../repository/teamsRepository');
const matchRepository = require('../repository/matchRepository')

function createMatch(team1Id, team2Id) {
    const team1 = teamRepository.findById(team1Id);
    const team2 = teamRepository.findById(team2Id);

    if (!team1 || !team2) {
        const error = new Error('Une des équipes est introuvable.');
        error.status = 404;
        throw error;
    }

    if (team1Id === team2Id) {
        const error = new Error('Une équipe ne peut pas jouer contre elle-même.');
        error.status = 400;
        throw error;
    }

    return matchRepository.create(team1Id, team2Id);
}


async function recordMatchResult(matchId, scoreTeam1, scoreTeam2) {
    const match = matchRepository.findById(matchId);
  
    if (!match) {
      const error = new Error('Match introuvable.');
      error.status = 404;
      throw error;
    }
  
    if (match.status === 'completed') {
      const error = new Error('Le résultat de ce match a déjà été enregistré.');
      error.status = 409;
      throw error;
    }
  
    matchRepository.addMatchFull(match.team1Id, match.team2Id, scoreTeam1, scoreTeam2);
    recalculateRanking();
    await notifyTeams(match);
  
    return match;
}

module.exports = {createMatch, recordMatchResult}