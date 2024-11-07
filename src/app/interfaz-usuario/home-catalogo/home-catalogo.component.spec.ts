import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCatalogoComponent } from './home-catalogo.component';

describe('HomeCatalogoComponent', () => {
  let component: HomeCatalogoComponent;
  let fixture: ComponentFixture<HomeCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
