const Data = require("../bd/Data")

const Emprunt = new Data("Emprunt",
    [
        'id',
        'id_Utilisateur',
        'id_Livre',
        'dateEmprunt'
    ])

module.exports = Emprunt