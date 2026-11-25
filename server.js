const express = require('express');

const data = require('./data');

const recalculateRanking = require('./service/rankingService')
const notifyTeams = require('./service/notificationService')

// import views
const TeamView = require('./views/Teams');


const app = express();
app.use(express.json());

const matchRoutes = require('./routes/matchRoutes');
const teamRoutes = require('./routes/teamRoutes');
const rankingRoutes = require('./routes/rankingRoutes');

app.use('/matches', matchRoutes);
app.use('/teams', teamRoutes);
app.use('/ranking', rankingRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route introuvable.' });
});

app.use((error, req, res, next) => {
  if (error.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Le corps de la requête doit être un JSON valide.' });
  }
  const status = error.status >= 400 && error.status < 500 ? error.status : 500;
  res.status(status).json({ error: status === 500 ? 'Erreur interne du serveur.' : error.message });
});

recalculateRanking();

app.listen(3000, () => {
  console.log('Arena Tournament disponible sur http://localhost:3000');
});


// Render React view
app.get('/teams', (req, res) => {
  const teams = TeamView.getAll();
  res.send(<Teams teams={teams} />);
});