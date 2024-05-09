import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddDrink } from '../model/add-drink.model';
import { Observable } from 'rxjs';
import { Drink } from '../model/drink.model';
import { environment } from '../../../../environments/environment';
import { UpdateDrink } from '../model/update-drink.model';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http:HttpClient) { }

  createDrink(addDrink: AddDrink):Observable<Drink>
  {
    return this.http.post<Drink>(`${environment.apiBaseUrl}/api/drinks`,addDrink);
  }

  getAllDrinks():Observable<Drink[]>
  {
    return this.http.get<Drink[]>(`${environment.apiBaseUrl}/api/drinks`);
  }
  
  getDrinkById(id: string):Observable<Drink>
  {
    return this.http.get<Drink>(`${environment.apiBaseUrl}/api/drinks/${id}`);
  }

  updateDrink(id: string, updateDrink: UpdateDrink):Observable<Drink>
  {
    return this.http.put<Drink>(`${environment.apiBaseUrl}/api/drinks/${id}`,updateDrink);
  }

  deleteDrink(id: string): Observable<Drink>
  {
    return this.http.delete<Drink>(`${environment.apiBaseUrl}/api/drinks/${id}`);
  }

  getAllMocktails(): Observable<Drink[]>
  {
    return this.http.get<Drink[]>(`${environment.apiBaseUrl}/api/drinks/mocktails`);
  }

  getAllCocktails(): Observable<Drink[]>
  {
    return this.http.get<Drink[]>(`${environment.apiBaseUrl}/api/drinks/cocktails`);
  }
}
