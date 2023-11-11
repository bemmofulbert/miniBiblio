import { NumberSymbol } from "@angular/common"

export class LivreModel {
    static tableName = "Livre"
    id: number
    titre:string = ""
	auteur:string = ""
	genre:string = ""
	id_Utilisateur:number

    static data_to_model(data){
      let model = new LivreModel()
      
      if (data["id"] != undefined) model.id = data["id"]
      if (data["titre"] != undefined) model.titre = data["titre"]
      if (data["auteur"] != undefined) model.auteur = data["auteur"]
      if (data["genre"] != undefined) model.genre = data["genre"]
      if (data["id_Utilisateur"] != undefined) model.id_Utilisateur = data["id_Utilisateur"]
      
      return model
    }
  }
