import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutLivreModalComponent } from './ajout-livre-modal.component';

describe('AjoutLivreModalComponent', () => {
  let component: AjoutLivreModalComponent;
  let fixture: ComponentFixture<AjoutLivreModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutLivreModalComponent]
    });
    fixture = TestBed.createComponent(AjoutLivreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
