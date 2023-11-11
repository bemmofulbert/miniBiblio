import { Component } from '@angular/core';
import { UtilisateurService } from '../../../services/Utilisateur.service'
import { LivreModel } from '../../../services/models/livre.model'
import { LivreService } from '../../../services/Livre.service'

/* 
* Ce composant affiche la liste des livres appartenant a l'utilisateur.
*/

@Component({
  selector: 'app-mes-livres-list',
  templateUrl: './mes-livres-list.component.html',
  styleUrls: ['./mes-livres-list.component.css']
})
export class MesLivresListComponent {
	dtOptions: DataTables.Settings = {};
	livres = []
	init(){
		this.livreService.getMesLivres(UtilisateurService.UtilisateurActuel,
			(dat)=>{
				this.livres = dat;
			});
	}
	constructor(protected livreService:LivreService) {}

	onDelete = (id)=> {
		this.livreService.delete(id, (res)=>{
			this.init();
		});
	}

	ngOnInit() {
		this.init();
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 10,
			autoWidth: true,
			language: {url: "assets/datatables.json"}
		};
	}
}
