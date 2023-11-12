import { NumberSymbol } from "@angular/common"

export class EmpruntModel {
    static tableName = "Emprunt"
    id: number
	id_Utilisateur:number
	id_Livre:number
	dateEmprunt:string

    static data_to_model(data){
      let model = new EmpruntModel()
      
      if (data["id"] != undefined) model.id = data["id"]
      if (data["id_Utilisateur"] != undefined) model.id_Utilisateur = data["id_Utilisateur"]
      if (data["id_Livre"] != undefined) model.id_Livre = data["id_Livre"]
      if (data["dateEmprunt"] != undefined) model.dateEmprunt = data["dateEmprunt"]
      
      return model
    }
  }
