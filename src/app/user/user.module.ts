import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserInfoComponent } from './user-info/user-info.component';

export interface User {
  id?: number;
  username: string;
  email?: string;
  password?: string;
}

@NgModule({
  declarations: [
    UserComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})

export class UserModule { }
