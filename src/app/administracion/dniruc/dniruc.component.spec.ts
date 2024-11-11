import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnirucComponent } from './dniruc.component';

describe('DnirucComponent', () => {
  let component: DnirucComponent;
  let fixture: ComponentFixture<DnirucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DnirucComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnirucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
