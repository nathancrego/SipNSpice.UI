import { Component, OnDestroy } from '@angular/core';
import { AddBase } from '../model/add-base.model';
import { Subscription } from 'rxjs';
import { BaseService } from '../services/base.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-add-base',
  templateUrl: './add-base.component.html',
  styleUrl: './add-base.component.css'
})
export class AddBaseComponent implements OnDestroy {

  //initialize the model
  model: AddBase;
  private addBaseSubscription?: Subscription;

  constructor(private baseService: BaseService, 
    private router: Router)
    {
      this.model = {
        name: '',
      };
    }

    onFormSubmit():void
    {
      this.addBaseSubscription = this.baseService.createBase(this.model)
      .subscribe({
        next:(response) => {
          this.router.navigateByUrl('/admin/bases');
        }
      });
    }

  ngOnDestroy(): void {
    this.addBaseSubscription?.unsubscribe();
  }

}
