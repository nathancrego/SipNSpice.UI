import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { ImageService } from './image.service';
import { response } from 'express';
import { Observable } from 'rxjs';
import { RecipeImage } from '../../models/recipe-image.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrl: './image-selector.component.css'
})
export class ImageSelectorComponent implements OnInit {

  private file?:File;
  fileName: string = '';
  title: string = '';
  images$?: Observable<RecipeImage[]>;

  @ViewChild('form',{static: false}) imageUploadForm?:NgForm;

  constructor(private imageService: ImageService){}

  ngOnInit(): void {
    this.getImages();
  }

  onFileUploadChange(event: Event):void
  {
    const element = event.currentTarget as HTMLInputElement;
    this.file = element.files?.[0];
  }

  uploadImage(): void
  {
    if(this.file && this.fileName !== '' && this.title !== '')
      {
        //Image service to upload the image
        this.imageService.uploadImage(this.file,this.fileName,this.title)
        .subscribe({
          next:(response)=>
            {
              this.imageUploadForm?.resetForm();
              this.getImages();
            }
        });
      }
  }

  selectImage(image:RecipeImage):void
  {
    this.imageService.selectImage(image);
  }

  private getImages()
  {
    this.images$ = this.imageService.getAllImages();
  }

}
