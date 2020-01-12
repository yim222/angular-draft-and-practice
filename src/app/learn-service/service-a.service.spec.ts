import { TestBed } from '@angular/core/testing';

import { ServiceAService } from './service-a.service';

describe('ServiceAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceAService = TestBed.get(ServiceAService);
    expect(service).toBeTruthy();
  });
});
