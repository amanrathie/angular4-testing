import { TestBed, inject } from '@angular/core/testing';

import { GameTypeService } from './game-type.service';

describe('GameTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameTypeService]
    });
  });

  it('should be created', inject([GameTypeService], (service: GameTypeService) => {
    expect(service).toBeTruthy();
  }));
});
