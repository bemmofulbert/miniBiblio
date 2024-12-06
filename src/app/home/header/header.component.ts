import { Component } from '@angular/core';
import { UtilisateurModel } from '../../services/models/utilisateur.model'
import { UtilisateurService } from '../../services/Utilisateur.service'
import { Router } from '@angular/router';

/* 
* Ce composant est l'entete de la page. 
* il permet aussi d'initialiser les informations 
* sur le client et de savoir si il est connecte
*/

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false,
})
export class HeaderComponent {
  constructor(
    private router: Router,
    protected utilisateurService: UtilisateurService
  ) {
    if (
      UtilisateurService.UtilisateurActuel == undefined ||
      !Number(UtilisateurService.UtilisateurActuel.id)
    ) {
      UtilisateurService.UtilisateurActuel = JSON.parse(
        localStorage.getItem('utilisateur') || ''
      );
      if (
        UtilisateurService.UtilisateurActuel == undefined ||
        UtilisateurService.UtilisateurActuel == null
      )
        this.gotoConnexion();
    }
  }
  gotoConnexion = () => {
    this.router.navigate(['connexion']);
  };
}
