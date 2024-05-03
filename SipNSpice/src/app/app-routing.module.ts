import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuisineListComponent } from './features/cuisine/cuisine-list/cuisine-list.component';
import { AddCuisineComponent } from './features/cuisine/add-cuisine/add-cuisine.component';
import { EditCuisineComponent } from './features/cuisine/edit-cuisine/edit-cuisine.component';

const routes: Routes = [
  {
    path: 'admin/cuisines',
    component: CuisineListComponent
  },
  {
    path: 'admin/cuisines/add',
    component: AddCuisineComponent
  },
  {
    path: 'admin/cuisines/:id',
    component: EditCuisineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
