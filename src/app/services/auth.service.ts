import { Injectable } from '@angular/core';
import { userDataLis } from '../data/users-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');    
  }

  login(userEmail: string, password: string): boolean {  
      let user = userDataLis.find(x => x.userEmail === userEmail);
      if(user && user.userPassword === password) {
        localStorage.setItem('isLoggedIn', "true");  
        localStorage.setItem('token', user.userId);
        return true
      } else 
      return false 
    }  
} 

