import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedsRoutingModule } from './breeds-routing.module';
import { BreedsComponent } from './breeds.component';
import { DetailsComponent } from './pages/details/details.component';
import { TableComponent } from './pages/table/table.component';


@NgModule({
  declarations: [
    BreedsComponent,
    DetailsComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    BreedsRoutingModule
  ]
})
export class BreedsModule { }
