import { NumberSymbol } from "@angular/common"

export class UtilisateurModel {
    static tableName = "Utilisateur"
    id: number
    // id = numero de telephone

    static data_to_model(data){
      let model = new UtilisateurModel()
      
      if (data["id"] != undefined) model.id = data["id"]
      
      return model
    }
  }
