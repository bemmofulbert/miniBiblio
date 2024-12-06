import { Component, Output, EventEmitter, Input } from '@angular/core';
import { LivreModel } from '../../services/models/livre.model';
import { LivreService } from '../../services/Livre.service';
import { UtilisateurService } from '../../services/Utilisateur.service';

@Component({
  selector: 'app-modif-livre-modal',
  templateUrl: './modif-livre-modal.component.html',
  styleUrls: ['../ajout-livre-modal/ajout-livre-modal.component.css'],
  standalone: false,
})
export class ModifLivreModalComponent {
  livre: LivreModel | undefined;
  @Input() show = false;
  err = false;
  @Output() modifFinished: EventEmitter<any> = new EventEmitter();

  constructor(protected livreService: LivreService) {}
  ngOnInit() {
    //this.livre.id_Utilisateur = UtilisateurService.UtilisateurActuel.id;
  }

  onRetour() {
    this.hide();
    this.modifFinished.emit(false);
  }

  hide() {
    this.show = false;
  }

  exec(livre: any) {
    this.livre = LivreModel.data_to_model(livre);
    this.show = true;
  }

  onSubmit() {
    if (
      this.livre!.titre.length > 0 &&
      this.livre!.auteur.length > 0 &&
      this.livre!.genre.length > 0
    ) {
      this.livreService.update(this.livre, (res) => {
        this.hide();
      });
      this.modifFinished.emit(true);
    } else {
      this.err = true;
    }
  }
}
