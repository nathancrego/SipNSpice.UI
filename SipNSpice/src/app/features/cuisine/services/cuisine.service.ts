import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuisine } from '../model/cuisine.model';
import { environment } from '../../../../environments/environment';
import { AddCuisineRequest } from '../model/add-cuisine.model';
import { UpdateCuisineRequest } from '../model/update-cuisine.model';

@Injectable({
  providedIn: 'root'
})
export class CuisineService {

  constructor(private http:HttpClient) { } //Injects and initializes httpclient

  getAllCuisine():Observable<Cuisine[]>
  {
    return this.http.get<Cuisine[]>(`${environment.apiBaseUrl}/api/cuisines`)
  }

  addCuisine(model: AddCuisineRequest):Observable<void>
  {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/cuisines`,model); //Injects the data passed via forms in to api
  }

  getCuisineById(id: string):Observable<Cuisine>
  {
    return this.http.get<Cuisine>(`${environment.apiBaseUrl}/api/cuisines/${id}`);
  }

  updateCuisine(id: string, updateCuisineRequest: UpdateCuisineRequest): Observable<Cuisine>
  {
    return this.http.put<Cuisine>(`${environment.apiBaseUrl}/api/cuisines/${id}`,updateCuisineRequest);
  }

  deleteCuisine(id: string):Observable<Cuisine>
  {
    return this.http.delete<Cuisine>(`${environment.apiBaseUrl}/api/cuisines/${id}`);
  }

}
