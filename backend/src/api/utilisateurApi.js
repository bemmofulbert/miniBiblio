const Utilisateur = require("../models/utilisateur")
const Api = require("./Api")

class UtilisateurApi extends Api {
    static router = Api.router

    constructor(){
        super(Utilisateur);        
    }
}
new UtilisateurApi()