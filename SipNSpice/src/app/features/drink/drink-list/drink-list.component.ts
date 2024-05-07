import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../model/drink.model';
import { DrinkService } from '../services/drink.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrl: './drink-list.component.css'
})
export class DrinkListComponent implements OnInit {

  drinks$?: Observable<Drink[]>;

  constructor(private drinkService: DrinkService){}


  ngOnInit(): void {
    this.drinks$ = this.drinkService.getAllDrinks();
  }

}
