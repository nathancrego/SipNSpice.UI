import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeImage } from '../model/recipe-image.model';
import { NgForm } from '@angular/forms';
import { RecipeImageSelectorService } from '../services/recipe-image-selector.service';

@Component({
  selector: 'app-recipe-image-selector',
  templateUrl: './recipe-image-selector.component.html',
  styleUrl: './recipe-image-selector.component.css'
})
export class RecipeImageSelectorComponent implements OnInit {

  private file?: File;
  fileName: string = '';
  title: string = '';
  recipeImages$?: Observable<RecipeImage[]>;

  @ViewChild('form', { static: false }) imageUploadForm?: NgForm;

  constructor(private recipeImageService: RecipeImageSelectorService) { }

  ngOnInit(): void {
    this.getImages();
  }

  onFileUploadChange(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.file = element.files?.[0];
  }

  uploadImage(): void {
    if (this.file && this.fileName !== '' && this.title !== '') {
      //Recipe Image service to upload the image
      this.recipeImageService.uploadImage(this.file, this.fileName, this.title)
        .subscribe({
          next: (response) => {
            this.imageUploadForm?.resetForm();
            this.getImages();
          }
        });
    }
  }

  selectImage(image: RecipeImage): void {
    this.recipeImageService.selectImage(image);
  }

  private getImages() {
    this.recipeImages$ = this.recipeImageService.getAllImages();
  }

}
