import { Injectable } from '@angular/core'
import { AxiosHandler } from './Axios.service'
import { UtilisateurModel } from './models/utilisateur.model'


@Injectable({
    providedIn: 'root'
})
export class UtilisateurService extends AxiosHandler{
  model!:UtilisateurModel
  public static UtilisateurActuel:UtilisateurModel
  
  constructor() {
    super(UtilisateurModel.tableName); 
  }
}
