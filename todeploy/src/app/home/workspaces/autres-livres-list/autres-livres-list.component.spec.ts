import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutresLivresListComponent } from './autres-livres-list.component';

describe('AutresLivresListComponent', () => {
  let component: AutresLivresListComponent;
  let fixture: ComponentFixture<AutresLivresListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutresLivresListComponent]
    });
    fixture = TestBed.createComponent(AutresLivresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
