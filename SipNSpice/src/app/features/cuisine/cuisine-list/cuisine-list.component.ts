import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuisine } from '../model/cuisine.model';
import { CuisineService } from '../services/cuisine.service';

@Component({
  selector: 'app-cuisine-list',
  templateUrl: './cuisine-list.component.html',
  styleUrl: './cuisine-list.component.css'
})
export class CuisineListComponent implements OnInit {

  cuisines$?: Observable<Cuisine[]>

  constructor(private cuisineService: CuisineService)
  {

  }

  ngOnInit(): void {
    this.cuisines$ = this.cuisineService.getAllCuisine();
  }

}
