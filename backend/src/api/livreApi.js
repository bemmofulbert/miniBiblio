const Livre = require("../models/livre")
const Api = require("./Api")

class LivreApi extends Api {
    static router = Api.router

    get_books_of_user = (req, res) => {
        Api.logDash();
        Livre.read_all(
            (data)=>{
                res.jsonp(data);
                res.status(200).end();
                console.log("get_books_of_user: terminated success");
            },
            (error)=>{console.log(error);res.end();console.log("get_books_of_user: terminated failed");},
            [],
            "Livre.id_Utilisateur =\'"+req.params.idUtilisateur+"\'"
        );
    }

    get_book_of_other_users = (req, res) => {
        Api.logDash();
        Livre.read_all(
            (data)=>{
                res.jsonp(data);
                res.status(200).end();
                console.log("get_book_of_other_users: terminated success");
            },
            (error)=>{console.log(error);res.end();console.log("get_book_of_other_users: terminated failed");},
            [],
            "Livre.id_Utilisateur !=\'"+req.params.idUtilisateur+"\'"
        );
    }

    get_borrowedBook_of_user = (req, res) => {
        Api.logDash();
        Livre.read_all(
            (data)=>{
                res.jsonp(data);
                res.status(200).end();
                console.log("get_borrowedBook_of_user: terminated success");
            },
            (error)=>{console.log(error);res.end();console.log("get_borrowedBook_of_user: terminated failed");},
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