import { Component, OnDestroy } from '@angular/core';
import { AddCuisineRequest } from '../model/add-cuisine.model';
import { Subscription } from 'rxjs';
import { CuisineService } from '../services/cuisine.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-add-cuisine',
  templateUrl: './add-cuisine.component.html',
  styleUrl: './add-cuisine.component.css'
})
export class AddCuisineComponent implements OnDestroy {

  //Initialize the model
  model: AddCuisineRequest;
  private addCuisineSubscription?: Subscription;

  //Inject the cuisine services
  constructor(private cuisineService: CuisineService, private router: Router) 
  {
    this.model = {
      mainCuisine: '',
      subCuisine:''
    };
  }

  //Method to call add-cuisine form
  onFormSubmit()
  {
    this.addCuisineSubscription = this.cuisineService.addCuisine(this.model)
    .subscribe({
      next:(response)=>{
        this.router.navigateByUrl('/admin/cuisines'); //This statement is to route back to the cuisine list page after adding
      }
    });
  }

  ngOnDestroy(): void {
    this.addCuisineSubscription?.unsubscribe();
  }
}
