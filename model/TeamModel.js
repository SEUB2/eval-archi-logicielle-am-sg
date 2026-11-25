const fs = require('fs');

exports.writeTeam = (team) => {
    return fs.appendFileSync("./data/team.json", JSON.stringify({
        id: team.id,
        name: team.name
    }));
}