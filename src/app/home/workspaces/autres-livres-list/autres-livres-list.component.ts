import { Component } from '@angular/core';
import { UtilisateurService } from '../../../services/Utilisateur.service'
import { LivreModel } from '../../../services/models/livre.model'
import { LivreService } from '../../../services/Livre.service'
import { EmpruntModel } from '../../../services/models/emprunt.model'
import { EmpruntService } from '../../../services/Emprunt.service'

/* 
* Ce composant affiche la liste des livres n'appartenant pas a l'utilisateur.
*/

@Component({
  selector: 'app-autres-livres-list',
  templateUrl: './autres-livres-list.component.html',
  styleUrls: ['./autres-livres-list.component.css']
})
export class AutresLivresListComponent {
	dtOptions: DataTables.Settings = {};
	emprunt:EmpruntModel
	livres = []
	init(){
		this.emprunt.id_Utilisateur = UtilisateurService.UtilisateurActuel.id;
		this.livreService.getAutresLivres(UtilisateurService.UtilisateurActuel,
			(dat)=>{
				this.livres = dat;
			});
	}
	constructor(protected livreService:LivreService, protected empruntService:EmpruntService) {
		this.emprunt = new EmpruntModel();
	}

	onEmprunt = (id)=> {
		this.emprunt.id_Livre = id;
		this.empruntService.create(this.emprunt);
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
