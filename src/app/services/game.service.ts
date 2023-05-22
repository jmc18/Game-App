import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { gameList } from '../data/game-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  public getGamesByCategory(category: string): Observable<Game[]> {
    return of(gameList?.filter(x => x?.category?.categoryId === category))
  }

  public addGame(game: Game) {
    gameList.push(game);
  }
}
