import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild("mesLivresList") mesLivresList:any
  @ViewChild("modifLivreModal") modifLivreModal:any

	sideAct:string = "Mes Livres";
  isAdding = false;
  isModifying = false;

  constructor(private router:Router, private activatedRoute: ActivatedRoute) {
    let sideSelected = activatedRoute.snapshot.params['sideSelected']
    if(sideSelected) {
      this.sideAct = sideSelected
    }
  }

  onSideBar_change(value:string) {
    if(value === "Log out") this.router.navigate(['']);
    this.sideAct = value
  }
  onAddFinished($event) {
    this.isAdding = false;
    if($event === true) this.mesLivresList.init();
  }
  onModifFinished($event){
    this.isModifying = false;
    if($event === true) this.mesLivresList.init();
  }
}
