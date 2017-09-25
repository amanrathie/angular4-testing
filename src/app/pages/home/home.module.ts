import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { HomeRoutingModule } from './home.routing';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GameTypeComponent } from './game-type/game-type.component';
import { GameTypeService } from './game-type/game-type.service';
import { GameComponent } from './game/game.component';
import { GameService } from './game/game.service';
import { DashboardService} from './dashboard/dashboard.service';

import { LoadingModule } from 'ngx-loading';

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
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    GameTypeComponent,
    GameComponent,
  ],
  providers: [
    GameTypeService,
    GameService,
    DashboardService
  ]
})
export class HomeModule { }
