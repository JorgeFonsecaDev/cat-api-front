import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './features/breeds/pages/details/details.component';
import { TableComponent } from './features/breeds/pages/table/table.component';
import { UserInfoComponent } from './user/user-info/user-info.component';

const routes: Routes = [
  { path: 'breeds/details', component: DetailsComponent },
  { path: 'breeds/table', component: TableComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'user',  component: UserInfoComponent },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
