import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Base } from '../model/base.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from '../services/base.service';
import { response } from 'express';
import { UpdateBase } from '../model/update-base.model';

@Component({
  selector: 'app-edit-base',
  templateUrl: './edit-base.component.html',
  styleUrl: './edit-base.component.css'
})
export class EditBaseComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramSubscription?: Subscription;
  editBaseSubscription?: Subscription;
  deleteBaseSubscription?: Subscription;
  base?: Base;

  constructor(private route: ActivatedRoute, private baseService: BaseService,
    private router: Router){}



  ngOnInit(): void {
    this.paramSubscription = this.route.paramMap.subscribe({
      next:(params)=>{
        this.id = params.get('id');
        if(this.id)
          {
            this.baseService.getBaseById(this.id)
            .subscribe({
              next:(response)=>{
                this.base = response;
              }
            })
          }
      }
    });
  }

  onFormSubmit():void{
    const updateBase: UpdateBase = {
      name: this.base?.name??''
    };

    if(this.id)
      {
        this.editBaseSubscription = this.baseService.updateBase(this.id, updateBase)
        .subscribe({
          next:(response) => {
            this.router.navigateByUrl('/admin/bases')
          }
        });
      }
  }

  onDelete():void{
    if(this.id){
      this.deleteBaseSubscription = this.baseService.deleteBase(this.id)
      .subscribe({
        next:(response) => {
          this.router.navigateByUrl('/admin/bases')
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.editBaseSubscription?.unsubscribe();
    this.deleteBaseSubscription?.unsubscribe();
  }

}
