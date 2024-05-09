import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailHomeComponent } from './cocktail-home.component';

describe('CocktailHomeComponent', () => {
  let component: CocktailHomeComponent;
  let fixture: ComponentFixture<CocktailHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CocktailHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
