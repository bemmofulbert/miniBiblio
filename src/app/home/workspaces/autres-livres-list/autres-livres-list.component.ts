import { Component } from '@angular/core';
import { UtilisateurService } from '../../../services/Utilisateur.service'
import { LivreModel } from '../../../services/models/livre.model'
import { LivreService } from '../../../services/Livre.service'
import { EmpruntModel } from '../../../services/models/emprunt.model'
import { EmpruntService } from '../../../services/Emprunt.service'

import {Subject} from 'rxjs';
/* 
* Ce composant affiche la liste des livres n'appartenant pas a l'utilisateur.
*/

@Component({
  selector: 'app-autres-livres-list',
  templateUrl: './autres-livres-list.component.html',
  styleUrls: ['./autres-livres-list.component.css']
})
export class AutresLivresListComponent {
	dtOptions: any = {};
	dtTrigger: Subject<any> = new Subject<any>();
	emprunt:EmpruntModel
	livres = []
	tableReady = false
	message = "Chargement..."

	init = ()=>{
		this.emprunt.id_Utilisateur = UtilisateurService.UtilisateurActuel.id;
		this.livreService.getAutresLivres(UtilisateurService.UtilisateurActuel,
			(dat)=>{
				this.livres = dat;

				this.dtTrigger.next(null);
				this.tableReady = true;
			},
			(err)=> {this.message = "😵 un probleme est survenu"});
	}
	constructor(protected livreService:LivreService, protected empruntService:EmpruntService) {
		this.emprunt = new EmpruntModel();
	}

	onEmprunt = (id)=> {
		this.emprunt.id_Livre = id;
		this.empruntService.create(this.emprunt);
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
