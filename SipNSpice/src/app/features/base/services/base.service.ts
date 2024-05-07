import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Base } from '../model/base.model';
import { environment } from '../../../../environments/environment';
import { AddBase } from '../model/add-base.model';
import { UpdateBase } from '../model/update-base.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http:HttpClient) { } //Injects and initializes the httpclient

  getAllBases():Observable<Base[]>
  {
    return this.http.get<Base[]>(`${environment.apiBaseUrl}/api/bases`);
  }

  createBase(model: AddBase):Observable<void>
  {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/bases`,model)
  }

  getBaseById(id: string):Observable<Base>
  {
    return this.http.get<Base>(`${environment.apiBaseUrl}/api/bases/${id}`);
  }

  updateBase(id: string, updateBase: UpdateBase):Observable<Base>
  {
    return this.http.put<Base>(`${environment.apiBaseUrl}/api/bases/${id}`,updateBase);
  }

  deleteBase(id: string):Observable<Base>
  {
    return this.http.delete<Base>(`${environment.apiBaseUrl}/api/bases/${id}`);
  }
}
