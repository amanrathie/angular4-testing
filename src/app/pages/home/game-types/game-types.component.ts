import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-types',
  templateUrl: './game-types.component.html',
  styleUrls: ['./game-types.component.css']
})
export class GameTypesComponent implements OnInit {

  category : String;

  constructor() { }

  ngOnInit() {

    this.category = "This is Game Types"
  }

}
