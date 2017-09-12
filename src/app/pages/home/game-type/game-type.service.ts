import { Injectable } from '@angular/core';
import {GameType} from './game-type';
import {GAME_TYPES} from './game-type.mock';

@Injectable()
export class GameTypeService {

  constructor() { }

  getGameTypes() : GameType[] {
    return GAME_TYPES;
  }

}
