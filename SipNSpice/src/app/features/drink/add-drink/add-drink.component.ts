import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddDrink } from '../model/add-drink.model';
import { Observable, Subscription } from 'rxjs';
import { Base } from '../../base/model/base.model';
import { DrinkService } from '../services/drink.service';
import { BaseService } from '../../base/services/base.service';
import { Router } from '@angular/router';
import { DrinkImageSelectorService } from '../services/drink-image-selector.service';

@Component({
  selector: 'app-add-drink',
  templateUrl: './add-drink.component.html',
  styleUrl: './add-drink.component.css'
})
export class AddDrinkComponent implements OnInit, OnDestroy {

  model:AddDrink;
  private addDrinkSubscription?:Subscription;
  bases$?:Observable<Base[]>;
  isImageSelectorVisible: boolean = false;
  drinkImageSelectSubscription?: Subscription;

  constructor(private drinkService: DrinkService,
    private baseService: BaseService,
    private router: Router,
    private drinkImageService: DrinkImageSelectorService)
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
    this.drinkImageSelectSubscription = this.drinkImageService.onSelectImage()
    .subscribe({
      next:(selectedImage)=>{
        this.model.imageUrl = selectedImage.url;
        this.closeImageSelector();
      }
    });
  }

  onFormSubmit():void{
    this.addDrinkSubscription = this.drinkService.createDrink(this.model)
    .subscribe({
      next:(response) => {
        this.router.navigateByUrl('/admin/drinks');
      }
    });
  }

  openImageSelector(): void {
    this.isImageSelectorVisible = true;

  }
  closeImageSelector(): void {
    this.isImageSelectorVisible = false;

  }

  onBack():void{
    this.router.navigateByUrl('/admin/recipes');
  }

  ngOnDestroy(): void {
    this.addDrinkSubscription?.unsubscribe();
    this.drinkImageSelectSubscription?.unsubscribe();
  }

}
