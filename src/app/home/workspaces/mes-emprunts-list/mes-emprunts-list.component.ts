import { Component, ViewChild } from '@angular/core';
import { UtilisateurService } from '../../../services/Utilisateur.service'
import { LivreModel } from '../../../services/models/livre.model'
import { LivreService } from '../../../services/Livre.service'
import { EmpruntModel } from '../../../services/models/emprunt.model'
import { EmpruntService } from '../../../services/Emprunt.service'

import {Subject} from 'rxjs';

/* 
* Ce composant affiche la liste des livres empruntes par l'utilisateur.
*/

@Component({
  selector: 'app-mes-emprunts-list',
  templateUrl: './mes-emprunts-list.component.html',
  styleUrls: ['./mes-emprunts-list.component.css'],
  standalone: false,
})
export class MesEmpruntsListComponent {
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  emprunt: EmpruntModel | undefined;
  livres: any[] | undefined = [];
  tableReady = false;
  message = 'Chargement...';

  init = () => {
    this.livreService.getEmprunts(
      UtilisateurService.UtilisateurActuel,
      (dat) => {
        this.livres = dat;

        this.tableReady = true;
        try {
          this.dtTrigger.next(null);
        } catch (e) {}
      },
      (err) => {
        this.message = '😵 un probleme est survenu';
      }
    );
  };
  constructor(
    protected livreService: LivreService,
    protected empruntService: EmpruntService
  ) {}
  configure = () => {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthChange: true,
      responsive: true,
      language: { url: 'assets/datatables.json' },
    };
  };
  // onRemettre =(id)=> {}
  ngOnInit() {
    this.init();
    this.configure();
  }
}
