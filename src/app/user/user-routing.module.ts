import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [{ path: '', component: UserComponent },  { path: '', component: UserInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
