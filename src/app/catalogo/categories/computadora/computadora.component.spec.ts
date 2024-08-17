import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadoraComponent } from './computadora.component';

describe('ComputadoraComponent', () => {
  let component: ComputadoraComponent;
  let fixture: ComponentFixture<ComputadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputadoraComponent]
    });
    fixture = TestBed.createComponent(ComputadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
