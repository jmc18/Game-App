import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categoryGameList as CategoryListData } from 'src/app/data/category-game-data';
import { CategoryGame } from 'src/app/models/category-game';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit{

  

  constructor(private authService: AuthService, private router: Router, ) {
    
  }

  public categoryGameList: CategoryGame[] = [];

  ngOnInit() {
    this.categoryGameList = CategoryListData;
  }

  logOut(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }

}
