import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, ActivationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public title: string = "";
  public subsTitle$ : Subscription;

  constructor( private router: Router, private route: ActivatedRoute) {

    console.log(route.snapshot.children)

    this.subsTitle$ = this.getRouteArguments()
      .subscribe(({title}) => {
        this.title = title;
        document.title = `AdminPro - ${title}`;
      });

  }

  private getRouteArguments() {
    return this.router.events
      .pipe(
        filter((event: any) => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map(event => event.snapshot.data)
      )
  }

  ngOnDestroy(): void {
    this.subsTitle$.unsubscribe();
  }
}
