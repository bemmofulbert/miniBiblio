import { Component } from '@angular/core';
import { UtilisateurService } from '../../../services/Utilisateur.service'
import { LivreModel } from '../../../services/models/livre.model'
import { LivreService } from '../../../services/Livre.service'

import {Subject} from 'rxjs';
/* 
* Ce composant affiche la liste des livres appartenant a l'utilisateur.
*/

@Component({
  selector: 'app-mes-livres-list',
  templateUrl: './mes-livres-list.component.html',
  styleUrls: ['./mes-livres-list.component.css']
})
export class MesLivresListComponent {
	dtOptions: DataTables.Settings = {
			pagingType: 'full_numbers',
			pageLength: 10,
			lengthChange: true,
			language: {url: "assets/datatables.json"}
		};
	dtTrigger: Subject<any> = new Subject<any>();
	livres = []
	init(){
		this.livreService.getMesLivres(UtilisateurService.UtilisateurActuel,
			(dat)=>{
				this.livres = dat;

				this.dtTrigger.next(null);
			});
	}
	constructor(protected livreService:LivreService) {}

	onDelete = (id)=> {
		this.livreService.delete(id, (res)=>{
			this.init();
		});
	}
	configure = ()=>{
		this.dtOptions= {pagingType: 'full_numbers',
			pageLength: 10,
			lengthChange: true,
			responsive: true,
			language: {url: "assets/datatables.json"}
		}
	}
	ngOnInit() {
		this.init();
		this.configure();
	}
}
