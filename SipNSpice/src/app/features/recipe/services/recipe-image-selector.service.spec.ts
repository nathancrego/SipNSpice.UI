import { TestBed } from '@angular/core/testing';

import { RecipeImageSelectorService } from './recipe-image-selector.service';

describe('RecipeImageSelectorService', () => {
  let service: RecipeImageSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeImageSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
