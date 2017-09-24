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

  constructor(private gameService : GameService) {
  }

  ngOnInit() {
  }

  addGame() : void {
    console.log('Form submitted value: ', this.game);
    this.gameService.addGame(this.game);  
  }

}
