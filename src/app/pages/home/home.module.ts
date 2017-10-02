import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { HomeRoutingModule } from './home.routing';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GameComponent } from './game/game.component';
import { GameService } from './game/game.service';
import { DashboardService} from './dashboard/dashboard.service';

import { LoadingModule } from 'ngx-loading';
import 'rxjs/add/operator/toPromise';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
    GameComponent,
  ],
  providers: [
    GameService,
    DashboardService
  ]
})
export class HomeModule { }
