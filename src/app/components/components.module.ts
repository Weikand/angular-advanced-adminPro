import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementorComponent } from './incrementor/incrementor.component';
import {FormsModule} from "@angular/forms";
import { DoughnutComponent } from './doughnut/doughnut.component';
import {NgChartsModule} from "ng2-charts";



@NgModule({
  declarations: [
    IncrementorComponent,
    DoughnutComponent
  ],
  exports: [
    IncrementorComponent,
    DoughnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
  ]
})
export class ComponentsModule { }
