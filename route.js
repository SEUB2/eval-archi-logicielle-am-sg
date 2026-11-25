const Router = require('./router.js');
const {createTeam} = require('./controller/TeamController.js');

const route = (server) => {
    const router = Router(server);

    router.get('/team', () => {
        console.log('get');
    });

    router.post('/team', createTeam);
};

module.exports = route;