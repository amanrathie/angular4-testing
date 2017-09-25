import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Game } from './game.model';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game : Game = new Game();
  games : Game[];

  constructor(private gameService : GameService) {
  }

  ngOnInit() {
    this.gameService
        .getGames()
        .then((res : Game[])  => this.games = res);
  }

  addGame() : void {
    this.gameService
        .addGame(this.game)
        .then((res:Game) => this.games.push(res));
  }

}
