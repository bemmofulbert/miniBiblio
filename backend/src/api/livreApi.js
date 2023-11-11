const Livre = require("../models/livre")
const Api = require("./Api")

class LivreApi extends Api {
    static router = Api.router

    get_books_of_user = (req, res) => {
        Livre.read_all(
            (data)=>{
                res.jsonp(data)
                res.status(200).end() 
            },
            (error)=>{console.log(error);res.end()},
            [],
            "Livre.id_Utilisateur =\'"+req.params.idUtilisateur+"\'"
        );
    }

    get_book_of_other_users = (req, res) => {
        Livre.read_all(
            (data)=>{
                res.jsonp(data)
                res.status(200).end() 
            },
            (error)=>{console.log(error);res.end()},
            [],
            "Livre.id_Utilisateur !=\'"+req.params.idUtilisateur+"\'"
        );
    }

    get_borrowedBook_of_user = (req, res) => {
        Livre.read_all(
            (data)=>{
                res.jsonp(data)
                res.status(200).end() 
            },
            (error)=>{console.log(error);res.end()},
            ["Emprunt"],
            "Livre.id = Emprunt.id_Livre and Emprunt.id_Utilisateur = \'"+req.params.idUtilisateur+"\'"
        );
    }

    constructor(){
        super(Livre);
        LivreApi.router.get("/"+this.model.tableName+"/Utilisateur/:idUtilisateur/mesLivres", this.get_books_of_user);
        LivreApi.router.get("/"+this.model.tableName+"/Utilisateur/:idUtilisateur/autreLivres", this.get_book_of_other_users);
        LivreApi.router.get("/"+this.model.tableName+"/Utilisateur/:idUtilisateur/emprunt", this.get_borrowedBook_of_user);
    }
}
new LivreApi()