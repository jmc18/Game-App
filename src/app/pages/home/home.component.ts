import { Component, OnInit } from '@angular/core';
import { categoryGameList as CategoryListData } from 'src/app/data/category-game-data';
import { CategoryGame } from 'src/app/models/category-game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit{

  

  constructor() {
    
  }

  public categoryGameList: CategoryGame[] = [];

  ngOnInit() {
    this.categoryGameList = CategoryListData;
  }

}
