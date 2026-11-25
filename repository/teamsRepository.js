const data = require('../data');

function getAllTeams(){
    return data.teams;
}

function getTeam(id){
    return data.teams.find((team)=> team.id ===id);
}

module.exports = {getAllTeams, getTeam}