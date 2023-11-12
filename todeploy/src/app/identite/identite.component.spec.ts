import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentiteComponent } from './identite.component';

describe('IdentiteComponent', () => {
  let component: IdentiteComponent;
  let fixture: ComponentFixture<IdentiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentiteComponent]
    });
    fixture = TestBed.createComponent(IdentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
