import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { gameList } from '../data/game-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  public getGamesPopulares(): Observable<Game[]> {
    return of(gameList?.filter(x => x?.rating >= 4))
  }

  public getGamesComminSoon(): Observable<Game[]> {
    return of(gameList?.filter(x => x?.isComingSoon))
  }

  public getGamesDownloas(): Observable<Game[]> {
    return of(gameList?.filter(x => x?.downloads >= 50))
  }

  public getGames(): Observable<Game[]> {
    return of(gameList)
  }

  public addGame(game: Game) {
    gameList.push(game);
  }
}
