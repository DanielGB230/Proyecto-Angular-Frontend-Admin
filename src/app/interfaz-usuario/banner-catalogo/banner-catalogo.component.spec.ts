import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCatalogoComponent } from './banner-catalogo.component';

describe('BannerCatalogoComponent', () => {
  let component: BannerCatalogoComponent;
  let fixture: ComponentFixture<BannerCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
