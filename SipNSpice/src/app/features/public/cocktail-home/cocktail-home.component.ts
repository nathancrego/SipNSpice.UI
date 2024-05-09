import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../../drink/model/drink.model';
import { DrinkService } from '../../drink/services/drink.service';

@Component({
  selector: 'app-cocktail-home',
  templateUrl: './cocktail-home.component.html',
  styleUrl: './cocktail-home.component.css'
})
export class CocktailHomeComponent implements OnInit {


  cock$?:Observable<Drink[]>

  constructor(private drinkService:DrinkService){}

  ngOnInit(): void {
    this.cock$ = this.drinkService.getAllCocktails();
  }

}
