import { TestBed } from '@angular/core/testing';

import { BolletaService } from './bolleta.service';

describe('BolletaService', () => {
  let service: BolletaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BolletaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
