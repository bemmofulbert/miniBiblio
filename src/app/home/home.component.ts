import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	sideAct:string = "Mes Livres";

  constructor(private activatedRoute: ActivatedRoute) {
    let sideSelected = activatedRoute.snapshot.params['sideSelected']
    if(sideSelected) {
      this.sideAct = sideSelected
    }
  }

  onSideBar_change(value:string) {
    this.sideAct = value
  }
}
