import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, AfterViewInit {

  recipes$?: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService){
    
  }

  ngAfterViewInit(): void {
    $('#recipeTable').DataTable({
      paging:true,
      searching:true,
    })
  }


  ngOnInit(): void {
    this.recipes$ = this.recipeService.getAllRecipes();
  }
}
