import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: string = '';  
  returnUrl: string; 

  constructor(private formBuilder: FormBuilder,  
    private router: Router,  
    private authService: AuthService){
      this.loginForm = this.formBuilder.group({  
        userEmail: ['', [Validators.required, Validators.email]],  
        password: ['', Validators.required]  
     }); 
      this.returnUrl = '/'; 
    }

    ngOnInit() {
      this.authService.logout();  
    }

    login() {  
      // stop here if form is invalid  
      if (this.loginForm.invalid) {  
         return;  
      }  
      else {  
        let loginResponse = this.authService.login(this.loginForm.value.userEmail, this.loginForm.value.password)
        if(loginResponse) 
          this.router.navigate([this.returnUrl]); 
        else 
          this.message = "Please check your userid and password";   
      }  
    } 
}
