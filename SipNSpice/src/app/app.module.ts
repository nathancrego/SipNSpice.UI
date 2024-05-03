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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CuisineListComponent,
    AddCuisineComponent,
    EditCuisineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
