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
                    .then(res => res.json() as Game[])
                    .catch(this.handleError);
  }

  addGame(newGame : Game) : Promise<void | Game> {
    return this.http.post(this.gameUrl, newGame)
                    .toPromise()
                    .then(res => res.json() as Game)
                    .catch(this.handleError);
  }

  editGame(updateGame : Game) : Promise<void | Game> {
    return this.http.put(this.gameUrl + '/' + updateGame._id, updateGame)
                    .toPromise()
                    .then(res => res.json() as Game)
                    .catch(this.handleError);
  }

  removeGame(game : Game) : Promise<string> {
    return this.http.delete(this.gameUrl + '/' + game._id)
                    .toPromise()
                    .then(res => res.json() as string)
                    .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}
