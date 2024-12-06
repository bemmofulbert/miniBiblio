import { NumberSymbol } from "@angular/common"

export class UtilisateurModel {
    static tableName = "Utilisateur"
    id: number | undefined
    // id = numero de telephone

    static data_to_model(data: any){
      let model = new UtilisateurModel()
      
      if (data["id"] != undefined) model.id = data["id"]
      
      return model
    }
  }
