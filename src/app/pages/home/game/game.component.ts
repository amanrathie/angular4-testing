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

  public loading : boolean = false;
  game : Game = new Game();
  games : Game[] = new Array<Game>();

  constructor(private gameService : GameService) {
  }

  ngOnInit() {
    this.loading = true;
    this.gameService
        .getGames()
        .then((res : Game[])  => {this.games = res; this.loading = false})
        .catch(() => this.loading = false)
  }

  saveGame() : void {
    this.loading = true;

    var gameId = this.game._id;

    if (gameId) { // edit mode
      this.gameService
          .editGame(this.game)
          .then((res:Game) => {
            this.clearForm();
            this.loading = false;
          }) // TODO: update the edited game in list
          .catch(() => this.loading = false);

    } else { // new game
      this.gameService
          .addGame(this.game)
          .then((res:Game) => {
            this.games.push(res);
            this.clearForm();
            this.loading = false;
          })
          .catch(() => this.loading = false);
    }
  }

  setGame(game : Game) {
    this.game = Object.assign({}, game);
  }

  removeGame(game : Game) {
    this.loading = true;
    this.gameService
        .removeGame(game)
        .then((res) => {this.games.splice(this.games.indexOf(game), 1); this.loading = false})
        .catch(() => this.loading = false);
  }

  clearForm() {
    this.game = new Game();
  }
}
