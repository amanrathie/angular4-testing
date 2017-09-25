import { Injectable } from '@angular/core';
import {Game} from './game.model';
import {Http, Response} from '@angular/http';

@Injectable()
export class GameService {

  private gameUrl = "/api/games";

  constructor(private http : Http) {  }

  getGames() : Promise<void | Game[]> {
    return this.http.get(this.gameUrl)
                    .toPromise()
                    .then(resp => resp.json() as Game[])
                    .catch(this.handleError);
  }

  addGame(newGame : Game) : Promise<void | Game> {
    return this.http.post(this.gameUrl, newGame)
                    .toPromise()
                    .then(resp => resp.json() as Game)
                    .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}
