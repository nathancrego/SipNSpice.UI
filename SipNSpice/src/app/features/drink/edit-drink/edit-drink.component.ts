import { Component, OnDestroy, OnInit } from '@angular/core';
import { Drink } from '../model/drink.model';
import { Observable, Subscription } from 'rxjs';
import { Base } from '../../base/model/base.model';
import { DrinkService } from '../services/drink.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from '../../base/services/base.service';
import { UpdateDrink } from '../model/update-drink.model';

@Component({
  selector: 'app-edit-drink',
  templateUrl: './edit-drink.component.html',
  styleUrl: './edit-drink.component.css'
})
export class EditDrinkComponent implements OnInit, OnDestroy{

  id: string | null = null;
  model?: Drink;
  bases$?: Observable<Base[]>;
  selectedBase?: string[];
  routeSubscription?: Subscription;
  getDrinkSubscription?: Subscription;
  updateDrinkSubscription?: Subscription;
  deleteDrinkSubscription?: Subscription;

  constructor(private drinkService: DrinkService,
    private route:ActivatedRoute,
    private baseService: BaseService,
    private router: Router
    ){}



  ngOnInit(): void {
    this.bases$ = this.baseService.getAllBases();
    this.routeSubscription = this.route.paramMap.subscribe({
      next:(params) =>{
        this.id = params.get('id');

        if(this.id)
          {
            this.getDrinkSubscription = this.drinkService.getDrinkById(this.id)
            .subscribe({
              next:(response) => {
                this.model = response;
                this.selectedBase = response.bases.map(x=>x.id);
              }
            });
          }

      }
    });
  }

  onFormSubmit():void{
    //convert model to request object
    if(this.model && this.id)
      {
        var updateDrink: UpdateDrink = {
          name: this.model.name,
          shortDescription: this.model.shortDescription,
          description: this.model.description,
          author: this.model.author,
          imageUrl: this.model.imageUrl,
          publishedDate: this.model.publishedDate,
          bases: this.selectedBase ?? []
        };

        this.updateDrinkSubscription = this.drinkService.updateDrink(this.id,updateDrink)
        .subscribe({
          next:(response) => {
            this.router.navigateByUrl('/admin/drinks');
          }
        });
      }
  }



  onDelete():void{
    if(this.id)
      {
        //call the service to delete blogpost
        this.deleteDrinkSubscription = this.drinkService.deleteDrink(this.id)
        .subscribe({
          next:(response) =>
            {
              this.router.navigateByUrl('/admin/drinks');
            }
        });
      }
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getDrinkSubscription?.unsubscribe();
    this.updateDrinkSubscription?.unsubscribe();
    this.deleteDrinkSubscription?.unsubscribe();
  }
}
