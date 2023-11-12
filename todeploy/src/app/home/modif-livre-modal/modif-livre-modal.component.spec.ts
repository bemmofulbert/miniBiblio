import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifLivreModalComponent } from './modif-livre-modal.component';

describe('ModifLivreModalComponent', () => {
  let component: ModifLivreModalComponent;
  let fixture: ComponentFixture<ModifLivreModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifLivreModalComponent]
    });
    fixture = TestBed.createComponent(ModifLivreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
