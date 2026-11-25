const {validateNewTeam} = require('../service/TeamService.js');
const {writeTeam} = require('../model/TeamModel.js');

exports.createTeam = (req, res) => {
    try {
        const validation = validateNewTeam(req.body);
        if (validation.status != "ok") {
            const data = JSON.stringify(res)
            res.writeHead(400);
            return res.end(data);
        }
        const result = writeTeam(req.body);
        const data = JSON.stringify(res,{result});
        res.writeHead(201);
        return res.end(data);
    } catch (e) {
        console.error(e);
        res.writeHead(500);
        return res.end("Unknown error");
    }
}