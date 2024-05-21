import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cuisine } from '../model/cuisine.model';
import { CuisineService } from '../services/cuisine.service';
import { AddCuisineRequest } from '../model/add-cuisine.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cuisine-list',
  templateUrl: './cuisine-list.component.html',
  styleUrl: './cuisine-list.component.css'
})
export class CuisineListComponent implements OnInit, AfterViewInit, OnDestroy {

  //Initialize the model
  model: AddCuisineRequest;
  private addCuisineSubscription?: Subscription;
  cuisines$?: Observable<Cuisine[]>

   //Inject the cuisine services
   constructor(private cuisineService: CuisineService, private router: Router) 
   {
     this.model = {
       mainCuisine: '',
       subCuisine:''
     };
   }
 
  ngAfterViewInit(): void {
    $('#cuisineTable').DataTable({
      paging:true,
      searching:true,
    })
  }

  ngOnInit(): void {
    this.cuisines$ = this.cuisineService.getAllCuisine();
  }
  

  //Method to call add-cuisine form
  onFormSubmit()
  {
    this.addCuisineSubscription = this.cuisineService.addCuisine(this.model)
    .subscribe({
      next:(response)=>{
        this.router.navigateByUrl('/admin/cuisines'); //This statement is to route back to the cuisine list page after adding
        window.location.reload();
      }
    });
  }

 
  ngOnDestroy(): void {
    this.addCuisineSubscription?.unsubscribe();
  }

}
