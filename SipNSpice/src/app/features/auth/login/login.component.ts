import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/login-request.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  model: LoginRequest;

  constructor(private authService:AuthService, private router:Router, private cookieService:CookieService){
    this.model = {
      email:'',
      password:''
    };
  }

  onFormSubmit():void{
    this.authService.login(this.model)
    .subscribe({
      next:(response)=>{
        //set auth cookie
        this.cookieService.set('Authorization',`Bearer ${response.token}`,
          undefined,'/',undefined,true,'Strict');

          //Set the user
          this.authService.setUser({
            email: response.email,
            roles: response.roles
          });

          //Direct to homepage (recipes)
          this.router.navigateByUrl('/recipes');
      }
    });
  }

}
