import { Component, OnInit } from '@angular/core';
import { GameType } from './game-type';
import { GameTypeService } from './game-type.service';

@Component({
  selector: 'app-game-type',
  templateUrl: './game-type.component.html',
  styleUrls: ['./game-type.component.css']
})
export class GameTypeComponent implements OnInit {

  public gameTypes : GameType[];

  constructor(private gameTypeService : GameTypeService) {
  }

  public removeGameType(gameType : GameType) {
    this.gameTypeService.removeGameType(gameType)
        .then(res => this.gameTypes.splice(this.gameTypes.indexOf(gameType), 1));
  }

  ngOnInit() {
    this.gameTypeService.getGameTypes()
        .then(
          (gameTypes : GameType[]) => this.gameTypes = gameTypes
        );
  }

}
