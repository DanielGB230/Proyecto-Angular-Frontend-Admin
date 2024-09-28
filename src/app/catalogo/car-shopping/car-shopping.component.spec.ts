import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShoppingComponent } from './car-shopping.component';

describe('CarShoppingComponent', () => {
  let component: CarShoppingComponent;
  let fixture: ComponentFixture<CarShoppingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarShoppingComponent]
    });
    fixture = TestBed.createComponent(CarShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
