import { Injectable } from '@angular/core'
import { AxiosHandler } from './Axios.service'
import { LivreModel } from './models/livre.model'
import { UtilisateurModel } from './models/utilisateur.model'


@Injectable({
    providedIn: 'root'
})
export class LivreService extends AxiosHandler{
  model!:LivreModel
  constructor() {
    super(LivreModel.tableName)
  }
  
  getMesLivres(utilisateur:UtilisateurModel, _callback=(data=[])=>{}, _catch=(error: any)=>{}){
        this.http.get(`/${this.tableName}/Utilisateur/${utilisateur["id"]}/mesLivres`)
            .then( res => {
                _callback(res.data)
            }) 
            .catch( error => {console.log(error);_catch(error);})
   }
   
   getAutresLivres(utilisateur:UtilisateurModel, _callback=(data=[])=>{}, _catch=(error: any)=>{}){
        this.http.get(`/${this.tableName}/Utilisateur/${utilisateur["id"]}/autreLivres`)
            .then( res => {
                _callback(res.data)
            }) 
            .catch( error => {console.log(error); _catch(error);})
   }
   
   getEmprunts(utilisateur:UtilisateurModel, _callback=(data=[])=>{}, _catch=(error: any)=>{}){
        this.http.get(`/${this.tableName}/Utilisateur/${utilisateur["id"]}/emprunt`)
            .then( res => {
                _callback(res.data)
            }) 
            .catch( error => {console.log(error); _catch(error);})
   }
}
