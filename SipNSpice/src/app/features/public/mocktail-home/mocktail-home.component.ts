import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../../drink/services/drink.service';
import { Observable } from 'rxjs';
import { Drink } from '../../drink/model/drink.model';

@Component({
  selector: 'app-mocktail-home',
  templateUrl: './mocktail-home.component.html',
  styleUrl: './mocktail-home.component.css'
})
export class MocktailHomeComponent implements OnInit {

  items?:string|null=null;
  mock$?:Observable<Drink[]>

  constructor(private drinkService:DrinkService){}

  ngOnInit(): void {
    this.mock$ = this.drinkService.getAllMocktails();
  }
}
