const Emprunt = require("../models/emprunt")
const Api = require("./Api")

class EmpruntApi extends Api {
    static router = Api.router
    constructor(){
        super(Emprunt)
    }
}
new EmpruntApi()