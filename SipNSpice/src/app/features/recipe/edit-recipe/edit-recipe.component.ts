import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { Observable, Subscription } from 'rxjs';
import { Cuisine } from '../../cuisine/model/cuisine.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { CuisineService } from '../../cuisine/services/cuisine.service';
import { response } from 'express';
import { UpdateRecipe } from '../model/update-recipe.model';
import { RecipeImageSelectorService } from '../services/recipe-image-selector.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent implements OnInit, OnDestroy {

  id: string | null = null;
  model?: Recipe;
  cuisines$?: Observable<Cuisine[]>;
  selectedCuisine?: string[];
  isImageSelectorVisible: boolean = false;
  routeSubscription?: Subscription;
  getRecipeSubscription?: Subscription;
  updateRecipeSubscription?: Subscription;
  deleteRecipeSubscription?: Subscription;
  imageSelectSubscription?: Subscription;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private cuisineService: CuisineService,
    private router: Router,
    private recipeImageService: RecipeImageSelectorService
  ) { }


  ngOnInit(): void {
    this.cuisines$ = this.cuisineService.getAllCuisine();
    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        //Get recipe from API
        if (this.id) {
          this.getRecipeSubscription = this.recipeService.getRecipeById(this.id).subscribe({
            next: (response) => {
              this.model = response;
              this.selectedCuisine = response.cuisines.map(x => x.id);
            }
          });
        }
        this.imageSelectSubscription = this.recipeImageService.onSelectImage()
          .subscribe({
            next: (response) => {
              if (this.model) {
                this.model.imageUrl = response.url;
                this.isImageSelectorVisible = false;
              }
            }
          })
      }
    });
  }

  onFormSubmit(): void {
    //convert model to request object
    if (this.model && this.id) {
      var updateRecipe: UpdateRecipe = {
        name: this.model.name,
        shortDescription: this.model.shortDescription,
        description: this.model.description,
        author: this.model.author,
        imageUrl: this.model.imageUrl,
        publishedDate: this.model.publishedDate,
        cuisines: this.selectedCuisine ?? []
      };

      this.updateRecipeSubscription = this.recipeService.updateRecipe(this.id, updateRecipe)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/admin/recipes');
          }
        });
    }
  }


  openImageSelector(): void {
    this.isImageSelectorVisible = true;

  }
  closeImageSelector(): void {
    this.isImageSelectorVisible = false;

  }


  onDelete(): void {
    if (this.id) {
      //call the service to delete blogpost
      this.deleteRecipeSubscription = this.recipeService.deleteRecipe(this.id)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/admin/recipes');
          }
        });
    }
  }

  onBack(): void {
    this.router.navigateByUrl('/admin/recipes');
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getRecipeSubscription?.unsubscribe();
    this.updateRecipeSubscription?.unsubscribe();
    this.deleteRecipeSubscription?.unsubscribe();
    this.imageSelectSubscription?.unsubscribe();
  }

}
