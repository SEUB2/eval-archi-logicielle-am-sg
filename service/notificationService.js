async function notifyTeams(match) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const team1 = data.teams.find((team) => team.id === match.team1Id);
  const team2 = data.teams.find((team) => team.id === match.team2Id);
  console.log(
    `Notification à ${team1.name} et ${team2.name} : match ${match.id} terminé, ` +
    `score ${match.scoreTeam1} - ${match.scoreTeam2}.`,
  );
}

module.exports = notifyTeams;