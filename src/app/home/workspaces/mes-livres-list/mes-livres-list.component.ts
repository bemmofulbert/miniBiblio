import { Component, Output, EventEmitter, signal } from '@angular/core';
import { UtilisateurService } from '../../../services/Utilisateur.service';
import { LivreModel } from '../../../services/models/livre.model';
import { LivreService } from '../../../services/Livre.service';

import { Subject } from 'rxjs';

/*
 * Ce composant affiche la liste des livres appartenant a l'utilisateur.
 */

@Component({
  selector: 'app-mes-livres-list',
  templateUrl: './mes-livres-list.component.html',
  styleUrls: ['./mes-livres-list.component.css'],
  standalone: false,
})
export class MesLivresListComponent {
  @Output() modifClick: EventEmitter<any> = new EventEmitter();
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  livres = signal<any[] | undefined>([]);
  tableReady = false;
  message = 'Chargement...';

  init() {
    this.livreService.getMesLivres(
      UtilisateurService.UtilisateurActuel,
      (dat) => {
        this.livres.set(dat);

        this.tableReady = true;
        try {
          this.dtTrigger.next(null);
        } catch (e) {}
      },
      (err) => {
        this.message = '😵 un probleme est survenu';
      }
    );
  }
  constructor(protected livreService: LivreService) {}

  onDelete = (id: any) => {
    this.livreService.delete(id, (res) => {
      this.init();
    });
  };
  configure = () => {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthChange: true,
      responsive: true,
      retrieve: true,
      language: { url: 'assets/datatables.json' },
    };
  };
  ngOnInit() {
    this.configure();
    this.init();
  }
}
