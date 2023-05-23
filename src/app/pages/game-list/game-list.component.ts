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
      if (this.category === 'populares') {
        this.gameService.getGamesPopulares().subscribe(data => this.gameList = data)
      } else if (this.category === 'descargados') {
        this.gameService.getGamesDownloas().subscribe(data => this.gameList = data) 
      } else if (this.category === 'proximamente') {
        this.gameService.getGamesComminSoon().subscribe(data => this.gameList = data)
      } else {
        this.gameService.getGames().subscribe(data => this.gameList = data)
      }
    });
  }
}
