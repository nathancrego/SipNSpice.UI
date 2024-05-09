import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../../drink/model/drink.model';
import { ActivatedRoute } from '@angular/router';
import { DrinkService } from '../../drink/services/drink.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.css'
})
export class CocktailDetailsComponent implements OnInit{

  id:string | null = null;
  cocktail$?:Observable<Drink>;

  constructor(private route:ActivatedRoute, private drinkService:DrinkService){}

  ngOnInit(): void {
    this.route.paramMap
    .subscribe({
      next:(params)=>{
        this.id = params.get('id');
      }
    });

    //fetch drink details by id
    if(this.id)
      {
        this.cocktail$ = this.drinkService.getDrinkById(this.id);
      }
  }

}
