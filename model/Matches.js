//Modèle représentant un match: un ID, l'id de l'équipe 1 et l'id de l'équie 2, le score 1 et le score 2, et le statut.
export class Matches{
    constructor(id, idEquipeA, idEquipeB){
        this.id = id;
        this.idEquipeA = idEquipeA;
        this.idEquipeB = idEquipeB;
        this.scoreEquipeA = null;
        this.scoreEquipeB = null;
        this.status = "pending";
    }
}