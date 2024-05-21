import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkImageSelectorComponent } from './drink-image-selector.component';

describe('DrinkImageSelectorComponent', () => {
  let component: DrinkImageSelectorComponent;
  let fixture: ComponentFixture<DrinkImageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrinkImageSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrinkImageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
