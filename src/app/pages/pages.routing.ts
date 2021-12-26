import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgressComponent} from "./progress/progress.component";
import {Chart1Component} from "./chart1/chart1.component";
import {AccountSettingsComponent} from "./account-settings/account-settings.component";
import {PromisesComponent} from "./promises/promises.component";
import {RxjsComponent} from "./rxjs/rxjs.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: {title: 'Dashboard'}},
      { path: 'progress', component: ProgressComponent, data: {title: 'ProgressBar'} },
      { path: 'chart1', component: Chart1Component, data: {title: 'Chart #1'} },
      { path: 'promises', component: PromisesComponent, data: {title: 'Promises'} },
      { path: 'rxjs', component: RxjsComponent, data: {title: 'RxJs'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'} }
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
