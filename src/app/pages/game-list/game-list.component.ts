import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.less']
})
export class GameListComponent {

  category: string = '';
  gameList: Game[] = [];

  constructor(private activatedRoute: ActivatedRoute, private gameService: GameService) {
    this.activatedRoute.params.subscribe((params) => {
      this.category = params['categoryGame']
      this.getGamesByCategory(this.category)
      console.log(this.category, params)
    });
  }

  getGamesByCategory(category: string) {
    this.gameService.getGamesByCategory(category).subscribe(data => {
      console.log(data)
      this.gameList = data;
    })
  }

}
