import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RecipeImage } from '../model/recipe-image.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeImageSelectorService {
  selectedImage: BehaviorSubject<RecipeImage> = new BehaviorSubject<RecipeImage>({
    id: '',
    fileExtension: '',
    fileName: '',
    title: '',
    url: ''
  });

  constructor(private http: HttpClient) { }

  getAllImages(): Observable<RecipeImage[]> {
    return this.http.get<RecipeImage[]>(`${environment.apiBaseUrl}/api/recipeimages`);
  }


  uploadImage(file: File, fileName: string, title: string): Observable<RecipeImage> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    formData.append('title', title);

    return this.http.post<RecipeImage>(`${environment.apiBaseUrl}/api/recipeimages`, formData)

  }

  selectImage(image: RecipeImage): void {
    this.selectedImage.next(image);
  }

  onSelectImage(): Observable<RecipeImage> {
    return this.selectedImage.asObservable();
  }
}
