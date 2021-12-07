import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router"

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Chart1Component } from './chart1/chart1.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Chart1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Chart1Component,
    PagesComponent
  ]
})
export class PagesModule { }
