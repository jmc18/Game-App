import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid4 } from "uuid";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {
  registerForm: FormGroup;
  message: string = '';  
  returnUrl: string; 

  constructor(private formBuilder: FormBuilder,  
    private router: Router,  
    private authService: AuthService, private userService: UserService) {
      this.registerForm = this.formBuilder.group({ 
        userName: ['', Validators.required], 
        userEmail: ['', [Validators.required, Validators.email]],  
        password: ['', [Validators.required, Validators.minLength(6)]],
        repeatPassword: ['', [Validators.required, Validators.minLength(6)]] 
     },
     {validator: this.passwordMatchValidator}
     ); 
      this.returnUrl = '/'; 
    }

    passwordMatchValidator(frm: FormGroup) {
      return frm.controls['password'].value === frm.controls['repeatPassword'].value ? null : {'mismatch': true};
    }

    register() {
      if (this.registerForm.invalid) {  
        return;  
     }  
     else {  
        let user = new User(uuid4(), this.registerForm.value.userEmail,
          this.registerForm.value.userName, this.registerForm.value.password)
      this.userService.addNewUser(user)
       let loginResponse = this.authService.login(user.userEmail, user.userPassword)
       if(loginResponse) 
         this.router.navigate([this.returnUrl]); 
       else 
         this.message = "Please check your userid and password";   
     }
    }
}
