import { TestBed } from '@angular/core/testing';

import { MedallasService } from './medallas.service';

describe('MedallasService', () => {
  let service: MedallasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedallasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
