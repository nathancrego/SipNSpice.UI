import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../recipe/model/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../recipe/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit{


  id:string|null=null;
  recipe$?:Observable<Recipe>;

  constructor(private route:ActivatedRoute, private recipeService:RecipeService){}

  ngOnInit(): void {
    this.route.paramMap
    .subscribe({
      next:(params)=>{
        this.id = params.get('id');
      }
    });

    //fetch recipe details by id
    if(this.id)
      {
        this.recipe$ = this.recipeService.getRecipeById(this.id);
      }
  }

}
