import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeliveryComponent } from './registro-delivery.component';

describe('RegistroDeliveryComponent', () => {
  let component: RegistroDeliveryComponent;
  let fixture: ComponentFixture<RegistroDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroDeliveryComponent]
    });
    fixture = TestBed.createComponent(RegistroDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
