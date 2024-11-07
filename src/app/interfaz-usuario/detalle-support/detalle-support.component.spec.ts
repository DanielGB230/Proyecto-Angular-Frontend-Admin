import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSupportComponent } from './detalle-support.component';

describe('DetalleSupportComponent', () => {
  let component: DetalleSupportComponent;
  let fixture: ComponentFixture<DetalleSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
