import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router"
import {FormsModule} from "@angular/forms";

import {SharedModule} from "../shared/shared.module";
import {ComponentsModule} from "../components/components.module";

import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Chart1Component} from './chart1/chart1.component';
import {PagesComponent} from './pages.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Chart1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Chart1Component,
    PagesComponent
  ]
})
export class PagesModule { }
