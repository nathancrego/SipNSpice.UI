import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuisineListComponent } from './features/cuisine/cuisine-list/cuisine-list.component';
import { EditCuisineComponent } from './features/cuisine/edit-cuisine/edit-cuisine.component';
import { RecipeListComponent } from './features/recipe/recipe-list/recipe-list.component';
import { AddRecipeComponent } from './features/recipe/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './features/recipe/edit-recipe/edit-recipe.component';
import { AddBaseComponent } from './features/base/add-base/add-base.component';
import { BaseListComponent } from './features/base/base-list/base-list.component';
import { EditBaseComponent } from './features/base/edit-base/edit-base.component';
import { AddDrinkComponent } from './features/drink/add-drink/add-drink.component';
import { DrinkListComponent } from './features/drink/drink-list/drink-list.component';
import { EditDrinkComponent } from './features/drink/edit-drink/edit-drink.component';
import { RecipeHomeComponent } from './features/public/recipe-home/recipe-home.component';
import { MocktailHomeComponent } from './features/public/mocktail-home/mocktail-home.component';
import { CocktailHomeComponent } from './features/public/cocktail-home/cocktail-home.component';
import { RecipeDetailsComponent } from './features/public/recipe-details/recipe-details.component';
import { MocktailDetailsComponent } from './features/public/mocktail-details/mocktail-details.component';
import { CocktailDetailsComponent } from './features/public/cocktail-details/cocktail-details.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/public/home/home.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'recipes',
    component:RecipeHomeComponent
  },
  {
    path:'recipes/:id',
    component:RecipeDetailsComponent
  },
  {
    path: 'mocktails',
    component:MocktailHomeComponent
  },
  {
    path:'mocktails/:id',
    component:MocktailDetailsComponent
  },
  {
    path: 'cocktails',
    component:CocktailHomeComponent
  },
  {
    path:'cocktails/:id',
    component:CocktailDetailsComponent
  },
  {
    path: 'admin/cuisines',
    component: CuisineListComponent
  },
  {
    path: 'admin/cuisines/:id',
    component: EditCuisineComponent
  },
  {
    path: 'admin/recipes',
    component: RecipeListComponent
  },
  {
    path: 'admin/recipes/add',
    component: AddRecipeComponent
  },
  {
    path: 'admin/recipes/:id',
    component: EditRecipeComponent
  },
  {
    path: 'admin/bases/add',
    component: AddBaseComponent
  },
  {
    path: 'admin/bases',
    component: BaseListComponent
  },
  {
    path: 'admin/bases/:id',
    component: EditBaseComponent
  },
  {
    path: 'admin/drinks/add',
    component: AddDrinkComponent
  },
  {
    path: 'admin/drinks',
    component: DrinkListComponent
  },
  {
    path: 'admin/drinks/:id',
    component: EditDrinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
