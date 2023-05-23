import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.less']
})
export class CardGameComponent {

  @Input() game: Game | undefined;

  constructor() {
    console.log(this.game!)
  }

}
