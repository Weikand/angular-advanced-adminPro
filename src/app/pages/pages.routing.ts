import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgressComponent} from "./progress/progress.component";
import {Chart1Component} from "./chart1/chart1.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'chart1', component: Chart1Component }
      // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
]


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
