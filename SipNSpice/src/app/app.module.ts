import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CuisineListComponent } from './features/cuisine/cuisine-list/cuisine-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddCuisineComponent } from './features/cuisine/add-cuisine/add-cuisine.component';
import { EditCuisineComponent } from './features/cuisine/edit-cuisine/edit-cuisine.component';
import { RecipeListComponent } from './features/recipe/recipe-list/recipe-list.component';
import { AddRecipeComponent } from './features/recipe/add-recipe/add-recipe.component';
import { MarkdownModule } from 'ngx-markdown';
import { EditRecipeComponent } from './features/recipe/edit-recipe/edit-recipe.component';
import { AddBaseComponent } from './features/base/add-base/add-base.component';
import { BaseListComponent } from './features/base/base-list/base-list.component';
import { EditBaseComponent } from './features/base/edit-base/edit-base.component';
import { AddDrinkComponent } from './features/drink/add-drink/add-drink.component';
import { DrinkListComponent } from './features/drink/drink-list/drink-list.component';
import { EditDrinkComponent } from './features/drink/edit-drink/edit-drink.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CuisineListComponent,
    AddCuisineComponent,
    EditCuisineComponent,
    RecipeListComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    AddBaseComponent,
    BaseListComponent,
    EditBaseComponent,
    AddDrinkComponent,
    DrinkListComponent,
    EditDrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
