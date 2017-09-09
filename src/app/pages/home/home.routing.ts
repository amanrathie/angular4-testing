import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { GameTypesComponent } from './game-types/game-types.component'


const routes: Routes =[
  { path: 'home',  component: HomeComponent,
      children: [
      { path: 'dashboard',      component: DashboardComponent },
      { path: 'user-profile',   component: UserProfileComponent },
      { path: 'table-list',     component: TableListComponent },
      { path: 'typography',     component: TypographyComponent },
      { path: 'icons',          component: IconsComponent },
      { path: 'maps',           component: MapsComponent },
      { path: 'notifications',  component: NotificationsComponent },
      { path: 'upgrade',        component: UpgradeComponent },
      { path: 'game-types',     component: GameTypesComponent },
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
