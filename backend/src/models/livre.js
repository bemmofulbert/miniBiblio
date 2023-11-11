const Data = require("../bd/Data")

const Livre = new Data("Livre",
    [
        'id',
        'titre',
        'auteur',
        'genre',
        'id_Utilisateur'
    ])

module.exports = Livre