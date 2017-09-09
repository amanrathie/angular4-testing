import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {CallbackComponent} from '../callback/callback.component';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    CallbackComponent
  ]
})
export class PagesModule { }
