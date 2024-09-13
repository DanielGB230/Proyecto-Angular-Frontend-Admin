import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminitracionProductosComponent } from './adminitracion-productos.component';

describe('AdminitracionProductosComponent', () => {
  let component: AdminitracionProductosComponent;
  let fixture: ComponentFixture<AdminitracionProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminitracionProductosComponent]
    });
    fixture = TestBed.createComponent(AdminitracionProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
