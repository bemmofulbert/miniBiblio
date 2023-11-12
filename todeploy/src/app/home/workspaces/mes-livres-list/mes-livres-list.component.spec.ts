import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesLivresListComponent } from './mes-livres-list.component';

describe('MesLivresListComponent', () => {
  let component: MesLivresListComponent;
  let fixture: ComponentFixture<MesLivresListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesLivresListComponent]
    });
    fixture = TestBed.createComponent(MesLivresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
