import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CuisineListComponent } from './features/cuisine/cuisine-list/cuisine-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { RecipeHomeComponent } from './features/public/recipe-home/recipe-home.component';
import { CocktailHomeComponent } from './features/public/cocktail-home/cocktail-home.component';
import { MocktailHomeComponent } from './features/public/mocktail-home/mocktail-home.component';
import { AboutComponent } from './features/public/about/about.component';
import { RecipeDetailsComponent } from './features/public/recipe-details/recipe-details.component';
import { CocktailDetailsComponent } from './features/public/cocktail-details/cocktail-details.component';
import { MocktailDetailsComponent } from './features/public/mocktail-details/mocktail-details.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LoginComponent } from './features/auth/login/login.component';
import { AuthInterceptor } from './core/components/interceptors/auth.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DataTablesModule } from 'angular-datatables';
import { DrinkImageSelectorComponent } from './features/drink/drink-image-selector/drink-image-selector.component';
import { RecipeImageSelectorComponent } from './features/recipe/recipe-image-selector/recipe-image-selector.component';
import { FooterComponent } from './features/public/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CuisineListComponent,
    EditCuisineComponent,
    RecipeListComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    AddBaseComponent,
    BaseListComponent,
    EditBaseComponent,
    AddDrinkComponent,
    DrinkListComponent,
    EditDrinkComponent,
    RecipeHomeComponent,
    CocktailHomeComponent,
    MocktailHomeComponent,
    AboutComponent,
    RecipeDetailsComponent,
    CocktailDetailsComponent,
    MocktailDetailsComponent,
    RegisterComponent,
    LoginComponent,
    DrinkImageSelectorComponent,
    RecipeImageSelectorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
