exports.validateNewTeam = (team) => {
    if (!team.id) {
        return {status: "error",field: "id"};
    }
    if (!team.name) {
        return {status: "error",field: "name"};
    }
    return {status:"ok"};
}