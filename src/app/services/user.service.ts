import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { userDataLis } from '../data/users-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addNewUser(user: User){
    userDataLis.push(user)
  }

}
