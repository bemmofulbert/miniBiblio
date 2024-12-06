import { Component, Output, EventEmitter, Input } from '@angular/core';
import { LivreModel } from '../../services/models/livre.model';
import { LivreService } from '../../services/Livre.service';
import { UtilisateurService } from '../../services/Utilisateur.service';

@Component({
  selector: 'app-ajout-livre-modal',
  templateUrl: './ajout-livre-modal.component.html',
  styleUrls: ['./ajout-livre-modal.component.css'],
  standalone: false,
})
export class AjoutLivreModalComponent {
  livre: LivreModel | undefined;
  @Input() show = false;
  err = false;
  @Output() addFinished: EventEmitter<any> = new EventEmitter();

  constructor(protected livreService: LivreService) {}
  ngOnInit() {
    this.livre = new LivreModel();
    this.livre.id_Utilisateur = UtilisateurService.UtilisateurActuel.id;
  }
  hide() {
    this.show = false;
  }
  onRetour() {
    this.hide();
    this.addFinished.emit(false);
  }

  onSubmit() {
    if (
      this.livre!.titre.length > 0 &&
      this.livre!.auteur.length > 0 &&
      this.livre!.genre.length > 0
    ) {
      this.livreService.create(this.livre, (res) => {
        this.hide();
      });
      this.addFinished.emit(true);
    } else {
      this.err = true;
    }
  }
}
