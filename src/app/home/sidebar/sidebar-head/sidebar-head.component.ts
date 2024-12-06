import { Component, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidebar-head',
  templateUrl: './sidebar-head.component.html',
  styleUrls: ['./sidebar-head.component.css'],
  standalone: false,
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ width: 0 }),
        animate('0.8s ease-out', style({ width: 230 })),
      ]),
      transition(':leave', [
        style({ width: 230 }),
        animate('0.8s ease-in', style({ width: 0 })),
      ]),
    ]),
  ],
})
export class SidebarHeadComponent {
  minimized = false;
  styleArrow: string = 'arrow_back';
  @Output() arrowClick: EventEmitter<any> = new EventEmitter();

  manageArrow() {
    this.minimized
      ? (this.styleArrow = 'arrow_forward')
      : (this.styleArrow = 'arrow_back');
  }
  manageEvent() {
    this.arrowClick.emit(this.minimized);
  }
  onArrowClick() {
    this.minimized = !this.minimized;
    this.manageArrow();
    this.manageEvent();
  }
}
