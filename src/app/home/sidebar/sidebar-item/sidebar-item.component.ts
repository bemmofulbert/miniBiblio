import { Component, EventEmitter, Output, Input} from '@angular/core';
import { Injectable } from '@angular/core';
import { SidebarComponent } from '../sidebar.component';
import { SidebarItemModel } from './sidebar-item.model';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css'],
  standalone: false,
})
@Injectable({ providedIn: SidebarComponent })
export class SidebarItemComponent {
  @Input() public item: SidebarItemModel = new SidebarItemModel();
  @Output() switchTo: EventEmitter<string> = new EventEmitter();

  onClick() {
    this.switchTo.emit(this.item.title);
  }
}
