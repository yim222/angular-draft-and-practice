import { TestBed } from '@angular/core/testing';

import { ServiceCService } from './service-c.service';

describe('ServiceCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceCService = TestBed.get(ServiceCService);
    expect(service).toBeTruthy();
  });
});
