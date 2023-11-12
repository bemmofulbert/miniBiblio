import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';

import { IdentiteComponent } from 'src/app/identite/identite.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { SidebarHeadComponent } from './home/sidebar/sidebar-head/sidebar-head.component';
import { SidebarFootComponent } from './home/sidebar/sidebar-foot/sidebar-foot.component';
import { SidebarItemComponent } from './home/sidebar/sidebar-item/sidebar-item.component';
import { MesLivresListComponent } from './home/workspaces/mes-livres-list/mes-livres-list.component';
import { MesEmpruntsListComponent } from './home/workspaces/mes-emprunts-list/mes-emprunts-list.component';
import { AutresLivresListComponent } from './home/workspaces/autres-livres-list/autres-livres-list.component';
import { AjoutLivreModalComponent } from './home/ajout-livre-modal/ajout-livre-modal.component';
import { ModifLivreModalComponent } from './home/modif-livre-modal/modif-livre-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    IdentiteComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarHeadComponent,
    SidebarFootComponent,
    SidebarItemComponent,
    MesLivresListComponent,
    MesEmpruntsListComponent,
    AutresLivresListComponent,
    AjoutLivreModalComponent,
    ModifLivreModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
