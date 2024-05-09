import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../recipe/model/recipe.model';
import { RecipeService } from '../../recipe/services/recipe.service';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.component.html',
  styleUrl: './recipe-home.component.css'
})
export class RecipeHomeComponent implements OnInit{

  rec$?:Observable<Recipe[]>

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    this.rec$ = this.recipeService.getAllRecipes();
  }

}
