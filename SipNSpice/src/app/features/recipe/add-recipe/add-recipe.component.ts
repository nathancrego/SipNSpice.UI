import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddRecipe } from '../model/add-recipe.model';
import { Observable, Subscription } from 'rxjs';
import { Cuisine } from '../../cuisine/model/cuisine.model';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';
import { CuisineService } from '../../cuisine/services/cuisine.service';
import { response } from 'express';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent implements OnInit, OnDestroy {
  model: AddRecipe;
  private addRecipeSubscription?: Subscription;
  cuisines$?: Observable<Cuisine[]>

  constructor(private recipeService: RecipeService,
    private router: Router,
    private cuisineService: CuisineService) {
    this.model = {
      name: '',
      shortDescription: '',
      description: '',
      author: '',
      imageUrl: '',
      publishedDate: new Date(),
      cuisines: []
    };
  }

  ngOnInit(): void {
    this.cuisines$ = this.cuisineService.getAllCuisine();
  }

  onFormSubmit():void{
    this.addRecipeSubscription = this.recipeService.createRecipe(this.model)
    .subscribe({
      next:(response) => {
        this.router.navigateByUrl('/admin/recipes');
      }
    });
  }

  onBack():void{
    this.router.navigateByUrl('/admin/recipes');
  }

  ngOnDestroy(): void {
    this.addRecipeSubscription?.unsubscribe();
  }

}
