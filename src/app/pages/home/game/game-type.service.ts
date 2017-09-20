import { Injectable } from '@angular/core';
import {GameType} from './game-type';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class GameTypeService {

  private gameTypeUrl = "/api/gametype";

  constructor(private http : Http) { }

    // one way to get using promise
    getGameTypes(): Promise<void | GameType[]> {
      return this.http.get(this.gameTypeUrl)
                 .toPromise()
                 .then(response => response.json().data as GameType[])
                 .catch(this.handleError);

     // another way to get using angular observable
     /*return this.http.get(this.gameTypeUrl)
                 .map(response => response.json().data);*/

    }

    removeGameType(gameType : GameType) {
      return this.http.delete(this.gameTypeUrl + '/' + gameType._id)
                .toPromise()
                .then(res => res.json().data as String)
                .catch(this.handleError);
    }


  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}
