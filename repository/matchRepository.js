const data = require('../data');

function getAllMatches(){
    return data.matches;
}

function getMatch(id){
    return data.matches.find((match)=> match.id ===id);
}

function addMatch(team1Id, team2Id){
    const match = {
        id: Math.max(0, ...data.matches.map((entry) => entry.id)) + 1,
        team1Id,
        team2Id,
        scoreTeam1: null,
        scoreTeam2: null,
        status: 'pending',
      };
    data.matches.push(match);
    return match;
}

function addFullMatch(team1Id, team2Id, scoreTeam1, scoreTeam2){
    const match = {
        id: Math.max(0, ...data.matches.map((entry) => entry.id)) + 1,
        team1Id,
        team2Id,
        scoreTeam1,
        scoreTeam2,
        status: 'completed',
      };
    data.matches.push(match);
    return match;
}
module.exports = {getAllMatches, getMatch, addMatch, addFullMatch}