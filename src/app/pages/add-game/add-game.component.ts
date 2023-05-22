import { Component, OnInit } from '@angular/core';
import { v4 as uuid4 } from "uuid";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { categoryGameList } from 'src/app/data/category-game-data';
import { CategoryGame } from 'src/app/models/category-game';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.less']
})
export class AddGameComponent implements OnInit {
  gameForm: FormGroup;
  categoryList: CategoryGame[];

  constructor(private fb: FormBuilder, private gameService: GameService, private router: Router) {
    this.categoryList = categoryGameList;
    this.gameForm = this.fb.group({
      title: ['', Validators.required],
      imageUrl: ['', Validators.required],
      category: ['', Validators.required],
      releaseDate: ['', Validators.required],
      reating: [0, Validators.required],
      downloads: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      isCommingSoon: [false]
    })
  }

  ngOnInit() {
    
  }

  onSubmit(form: FormGroup) {
    if(form.valid) {
      let categoryGame = this.categoryList?.find(x => x.categoryId === form.value.category);
      var newGame = new Game(uuid4(), categoryGame!, form.value.title,
      form.value.releaseDate, form.value.imageUr, form.value.reating, form.value.downloads, form.value.isComingSoon)
      this.gameService.addGame(newGame);
      this.router.navigate([`/game/${form.value.category}`]);
    }
  }
}
