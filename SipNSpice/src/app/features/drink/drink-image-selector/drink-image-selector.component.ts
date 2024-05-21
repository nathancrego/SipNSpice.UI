import { Component, OnInit, ViewChild } from '@angular/core';
import { DrinkImage } from '../model/drink-image.model';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { DrinkImageSelectorService } from '../services/drink-image-selector.service';

@Component({
  selector: 'app-drink-image-selector',
  templateUrl: './drink-image-selector.component.html',
  styleUrl: './drink-image-selector.component.css'
})
export class DrinkImageSelectorComponent implements OnInit{

  private file?:File;
  fileName: string = '';
  title: string = '';
  drinkImages$?: Observable<DrinkImage[]>;

  @ViewChild('form',{static: false}) imageUploadForm?:NgForm;

  constructor(private drinkImageService: DrinkImageSelectorService){}

  ngOnInit(): void {
    this.getImages();
  }

  onFileUploadChange(event: Event):void
  {
    const element = event.currentTarget as HTMLInputElement;
    this.file = element.files?.[0];
  }

  uploadDrinkImage(): void
  {
    if(this.file && this.fileName !== '' && this.title !== '')
      {
        //Drink Image service to upload the image
        this.drinkImageService.uploadImage(this.file,this.fileName,this.title)
        .subscribe({
          next:(response)=>
            {
              this.imageUploadForm?.resetForm();
              this.getImages();
            }
        });
      }
  }

  selectImage(image:DrinkImage):void
  {
    this.drinkImageService.selectImage(image);
  }

  private getImages()
  {
    this.drinkImages$ = this.drinkImageService.getAllImages();
  }


}
