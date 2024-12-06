import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarItemModel } from './sidebar-item/sidebar-item.model'
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: false,
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ width: 0 }),
        animate('0.8s ease-out', style({ width: 270 })),
      ]),
      transition(':leave', [
        style({ width: 270 }),
        animate('0.8s ease-in', style({ width: 0 })),
      ]),
    ]),
  ],
})
export class SidebarComponent {
  @Output() switchTo: EventEmitter<string> = new EventEmitter();
  @Input() sideAct = 'Mes Livres';

  items = [
    new SidebarItemModel('person_pin', 'Mes Livres', true),
    new SidebarItemModel('bar_chart', 'Autres Livres'),
    new SidebarItemModel('work', 'Mes Emprunts'),
    new SidebarItemModel('logout', 'Log out'),
  ];
  minimized: Boolean = false;

  ngOnInit() {
    this.onSwitchTo(this.sideAct);
  }
  onArrowClick(value: Boolean) {
    this.minimized = value;
  }

  onSwitchTo(value: string) {
    this.switchTo.emit(value);
    this.items.forEach((item) => {
      item.title == value ? (item.selected = true) : (item.selected = false);
    });
  }
}
