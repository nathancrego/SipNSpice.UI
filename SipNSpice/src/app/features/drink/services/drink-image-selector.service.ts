import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DrinkImage } from '../model/drink-image.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrinkImageSelectorService {
  selectedImage: BehaviorSubject<DrinkImage> = new BehaviorSubject<DrinkImage>({
    id:'',
    fileExtension:'',
    fileName: '',
    title:'',
    url:''
  });

  constructor(private http:HttpClient) { }


  getAllImages():Observable<DrinkImage[]>
  {
    return this.http.get<DrinkImage[]>(`${environment.apiBaseUrl}/api/drinkimages`);
  }

  uploadImage(file: File, fileName:string, title:string):Observable<DrinkImage>
  {
    const formData = new FormData();
    formData.append('file',file);
    formData.append('fileName',fileName);
    formData.append('title',title);

    return this.http.post<DrinkImage>(`${environment.apiBaseUrl}/api/drinkimages`,formData)

  }

  selectImage(image: DrinkImage):void
  {
    this.selectedImage.next(image);
  }

  onSelectImage():Observable<DrinkImage>
  {
    return this.selectedImage.asObservable();
  }

}
