import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {CallbackComponent} from '../callback/callback.component';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
  ],
  declarations: [
    NotFoundComponent,
    CallbackComponent
  ]
})
export class PagesModule { }
