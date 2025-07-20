import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './features/breeds/pages/details/details.component';
import { TableComponent } from './features/breeds/pages/table/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'breeds/details', pathMatch: 'full' },
  { path: 'breeds/details', component: DetailsComponent },
  { path: 'breeds/table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
