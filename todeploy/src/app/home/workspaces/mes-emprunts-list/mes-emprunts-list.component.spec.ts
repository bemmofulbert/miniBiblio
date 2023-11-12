import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesEmpruntsListComponent } from './mes-emprunts-list.component';

describe('MesEmpruntsListComponent', () => {
  let component: MesEmpruntsListComponent;
  let fixture: ComponentFixture<MesEmpruntsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesEmpruntsListComponent]
    });
    fixture = TestBed.createComponent(MesEmpruntsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
