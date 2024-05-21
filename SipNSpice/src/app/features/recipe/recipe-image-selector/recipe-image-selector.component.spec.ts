import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeImageSelectorComponent } from './recipe-image-selector.component';

describe('RecipeImageSelectorComponent', () => {
  let component: RecipeImageSelectorComponent;
  let fixture: ComponentFixture<RecipeImageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeImageSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeImageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
