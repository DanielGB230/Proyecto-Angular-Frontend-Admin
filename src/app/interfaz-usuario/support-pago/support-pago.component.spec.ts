import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportPagoComponent } from './support-pago.component';

describe('SupportPagoComponent', () => {
  let component: SupportPagoComponent;
  let fixture: ComponentFixture<SupportPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportPagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
