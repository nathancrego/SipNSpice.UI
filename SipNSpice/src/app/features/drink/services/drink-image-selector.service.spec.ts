import { TestBed } from '@angular/core/testing';

import { DrinkImageSelectorService } from './drink-image-selector.service';

describe('DrinkImageSelectorService', () => {
  let service: DrinkImageSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkImageSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
