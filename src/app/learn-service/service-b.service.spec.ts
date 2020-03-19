import { TestBed } from '@angular/core/testing';

import { ServiceBService } from './service-b.service';

describe('ServiceBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBService = TestBed.get(ServiceBService);
    expect(service).toBeTruthy();
  });
});
