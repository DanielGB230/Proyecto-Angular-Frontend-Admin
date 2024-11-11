import { TestBed } from '@angular/core/testing';
import { DnirucService } from './dniruc.service';
describe('dniruc', () => {
  let service: DnirucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DnirucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
