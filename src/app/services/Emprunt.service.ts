import { Injectable } from '@angular/core'
import { AxiosHandler } from './Axios.service'
import { EmpruntModel } from './models/emprunt.model'


@Injectable({
    providedIn: 'root'
})
export class EmpruntService extends AxiosHandler{
  model!:EmpruntModel
  constructor() {
    super(EmpruntModel.tableName); 
  }
}
