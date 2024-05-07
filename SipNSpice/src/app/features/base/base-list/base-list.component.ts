import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Base } from '../model/base.model';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrl: './base-list.component.css'
})
export class BaseListComponent implements OnInit{

  bases$?:Observable<Base[]>
  constructor(private baseService:BaseService){}

  ngOnInit(): void {
    this.bases$ = this.baseService.getAllBases();
  }

}
