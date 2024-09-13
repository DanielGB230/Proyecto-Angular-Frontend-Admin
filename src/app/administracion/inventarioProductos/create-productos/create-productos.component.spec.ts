import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductosComponent } from './create-productos.component';

describe('CreateProductosComponent', () => {
  let component: CreateProductosComponent;
  let fixture: ComponentFixture<CreateProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProductosComponent]
    });
    fixture = TestBed.createComponent(CreateProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
