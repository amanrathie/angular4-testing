import { Injectable } from '@angular/core';
import {GameType} from './game-type';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class GameTypeService {

  private gameTypeUrl = "/api/gametype";

  constructor(private http : Http) { }

  getGameTypes(): Promise<void | GameType[]> {
    return this.http.get(this.gameTypeUrl)
               .toPromise()
               .then(response => response.json() as GameType[])
               .catch(this.handleError);
  }

  removeGameType(gameType : GameType) {
    return this.http.delete(this.gameTypeUrl + '/' + gameType._id)
              .toPromise()
              .then(res => res.json() as String)
              .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}
