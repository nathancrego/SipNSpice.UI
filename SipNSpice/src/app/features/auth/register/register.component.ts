import { Component } from '@angular/core';
import { RegisterRequest } from '../models/register-request.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  model: RegisterRequest;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService) {
    this.model = {
      email: '',
      password: ''
    };
  }

  onRegister():void{
    this.authService.register(this.model)
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

          //Direct to homepage
          this.router.navigateByUrl('/home');
      },
      error: (err) => this.errorMessage = err.error
    });
  }

}
