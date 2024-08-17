import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCatalogoComponent } from './carousel-catalogo.component';

describe('CarouselCatalogoComponent', () => {
  let component: CarouselCatalogoComponent;
  let fixture: ComponentFixture<CarouselCatalogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselCatalogoComponent]
    });
    fixture = TestBed.createComponent(CarouselCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
