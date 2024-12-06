import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/Utilisateur.service'
import { UtilisateurModel } from '../services/models/utilisateur.model'

@Component({
  selector: 'app-identite',
  templateUrl: './identite.component.html',
  styleUrls: ['./identite.component.css', './profils.css'],
  standalone: false,
})
export class IdentiteComponent {
  utilisateur: UtilisateurModel;
  incorrect: Boolean = false;
  isconnecting: Boolean = false;
  constructor(
    private router: Router,
    protected utilisateurService: UtilisateurService
  ) {
    const utilisateurJson = localStorage.getItem('utilisateur');
    if (utilisateurJson)
      this.utilisateur = JSON.parse(utilisateurJson) || new UtilisateurModel();
    else this.utilisateur = new UtilisateurModel();
  }

  gotoHome = (res: any) => {
    this.router.navigate(['home']);
    this.isconnecting = false;
  };

  onSubmit() {
    this.incorrect = false;
    this.isconnecting = true;

    if (Number(this.utilisateur.id)) {
      UtilisateurService.UtilisateurActuel = this.utilisateur;
      this.utilisateurService.create(
        this.utilisateur,
        this.gotoHome,
        this.gotoHome
      );

      // on enregistre l'utilisateur dans les cookies
      localStorage.setItem('utilisateur', JSON.stringify(this.utilisateur));
    } else {
      this.incorrect = true;
      this.isconnecting = false;
    }
  }
}
