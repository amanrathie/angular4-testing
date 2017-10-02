import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {GameComponent} from './game/game.component';


const routes: Routes =[
  { path: 'home',  component: HomeComponent,
      children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'games', component: GameComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule { }
