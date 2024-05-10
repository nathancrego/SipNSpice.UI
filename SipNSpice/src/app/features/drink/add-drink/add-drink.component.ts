import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddDrink } from '../model/add-drink.model';
import { Observable, Subscription } from 'rxjs';
import { Base } from '../../base/model/base.model';
import { DrinkService } from '../services/drink.service';
import { BaseService } from '../../base/services/base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-drink',
  templateUrl: './add-drink.component.html',
  styleUrl: './add-drink.component.css'
})
export class AddDrinkComponent implements OnInit, OnDestroy {

  model:AddDrink;
  private addDrinkSubscription?:Subscription;
  bases$?:Observable<Base[]>

  constructor(private drinkService: DrinkService,
    private baseService: BaseService,
    private router: Router)
  {
    this.model = {
      name: '',
      shortDescription: '',
      description: '',
      author: '',
      imageUrl: '',
      publishedDate: new Date(),
      bases: []
    };
  }

  ngOnInit(): void {
    this.bases$ = this.baseService.getAllBases();
  }

  onFormSubmit():void{
    this.addDrinkSubscription = this.drinkService.createDrink(this.model)
    .subscribe({
      next:(response) => {
        this.router.navigateByUrl('/admin/drinks');
      }
    });
  }

  onBack():void{
    this.router.navigateByUrl('/admin/recipes');
  }

  ngOnDestroy(): void {
    this.addDrinkSubscription?.unsubscribe();
  }

}
