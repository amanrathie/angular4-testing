import { Injectable } from '@angular/core';
import {GameService} from '../game/game.service';
import {Game} from '../game/game.model';
import {Dashboard} from './dashboard.model';

@Injectable()
export class DashboardService {

  public dashboard : Dashboard = new Dashboard();

  constructor(private gameService : GameService) {
    this.gameService
        .getGames()
        .then((res : Game[]) => this.dashboard.totalGamesPlayed = res.length);
  }
}
