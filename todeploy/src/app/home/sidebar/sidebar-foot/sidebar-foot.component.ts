import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-foot',
  templateUrl: './sidebar-foot.component.html',
  styleUrls: ['./sidebar-foot.component.css']
})
export class SidebarFootComponent {
  giveContact(){
    alert("Fait par BEMMO MBOBDA,Developpeur Polyvalent\nemail: bemmoFulbert@gmail.com\n+tel: +237 682 19 31 57")
  }
}
