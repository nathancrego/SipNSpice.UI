import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCuisineComponent } from './edit-cuisine.component';

describe('EditCuisineComponent', () => {
  let component: EditCuisineComponent;
  let fixture: ComponentFixture<EditCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCuisineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
