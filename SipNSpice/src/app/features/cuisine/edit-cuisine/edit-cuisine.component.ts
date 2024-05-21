import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cuisine } from '../model/cuisine.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CuisineService } from '../services/cuisine.service';
import { response } from 'express';
import { UpdateCuisineRequest } from '../model/update-cuisine.model';

@Component({
  selector: 'app-edit-cuisine',
  templateUrl: './edit-cuisine.component.html',
  styleUrl: './edit-cuisine.component.css'
})
export class EditCuisineComponent implements OnInit, OnDestroy {
  id: string | null = null;
  paramSubscription?: Subscription;
  editCuisineSubscription?: Subscription;
  cuisine?: Cuisine;

  constructor(private route: ActivatedRoute, private cuisineService: CuisineService, private router: Router) {

  }

  ngOnInit(): void {
    this.paramSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if (this.id) {
          this.cuisineService.getCuisineById(this.id)
            .subscribe({
              next: (response) => {
                this.cuisine = response;
              }
            })
        }
      }
    });
  }

  onFormSubmit(): void {
    const updateCuisineRequest: UpdateCuisineRequest = {
      mainCuisine: this.cuisine?.mainCuisine ?? '',
      subCuisine: this.cuisine?.subCuisine ?? ''
    };

    //Pass object in to the service
    if (this.id) {
      this.editCuisineSubscription = this.cuisineService.updateCuisine(this.id, updateCuisineRequest)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/admin/cuisines')
          }
        });
    }
  }

  onDelete(): void {
    if (this.id) {
      this.cuisineService.deleteCuisine(this.id)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/admin/cuisines')
          }
        });
    }
  }

  onBack():void{
    this.router.navigateByUrl('/admin/cuisines');
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
    this.editCuisineSubscription?.unsubscribe();
  }

}
