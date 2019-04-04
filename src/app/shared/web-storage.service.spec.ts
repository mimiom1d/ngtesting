import { TestBed, inject } from '@angular/core/testing';

import { XyzWebStorageService } from './web-storage.service';

describe('XyzWebStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XyzWebStorageService]
    });
  });

  it('should be created', inject([XyzWebStorageService], (service: XyzWebStorageService) => {
    expect(service).toBeTruthy();
  }));
});
