import { Injectable } from '@angular/core';
import {GameType} from './game-type';
import {GAME_TYPES} from './game-type.mock';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameTypeService {

  private gameTypeUrl = "/api/gametype";
  //private gameTypes : GameType[];

  constructor(private http : Http) { }

    getGameTypes(): Promise<void | GameType[]> {
      return this.http.get(this.gameTypeUrl)
                 .toPromise()
                 .then(response => response.json() as GameType[])
                 .catch(this.handleError);
    }


  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}
