import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddRecipe } from '../model/add-recipe.model';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import { environment } from '../../../../environments/environment';
import { UpdateRecipe } from '../model/update-recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  createRecipe(data: AddRecipe): Observable<Recipe>
  {
    return this.http.post<Recipe>(`${environment.apiBaseUrl}/api/recipes?addAuth=true`,data);
  }

  getAllRecipes():Observable<Recipe[]>
  {
    return this.http.get<Recipe[]>(`${environment.apiBaseUrl}/api/recipes`);
  }

  getRecipeById(id: string):Observable<Recipe>{
    return this.http.get<Recipe>(`${environment.apiBaseUrl}/api/recipes/${id}`);
  }

  updateRecipe(id: string, updateRecipe:UpdateRecipe): Observable<Recipe>
  {
    return this.http.put<Recipe>(`${environment.apiBaseUrl}/api/recipes/${id}?addAuth=true`,updateRecipe);
  }

  deleteRecipe(id: string):Observable<Recipe>
  {
    return this.http.delete<Recipe>(`${environment.apiBaseUrl}/api/recipes/${id}?addAuth=true`);
  }

}
