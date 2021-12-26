import {Component, OnDestroy} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  constructor() {

    // this.returnObservable().pipe(
    //   retry(1)
    // ).subscribe((value) => console.log('Subs:', value),
    //   (error) => console.warn('Error:', error),
    //   () => console.info('Obs ended')
    // );

    this.intervalSubs = this.returnInterval().subscribe(console.log);

  }

  returnInterval(): Observable<number> {
    return interval(100)
      .pipe(
        // take(10),
        map( value => value + 1),
        filter(value => value % 2 === 0)
      );
  }

  returnObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>(observer => {

      const interval = setInterval(() => {

        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i arrived at 2');
        }

      }, 1000)
    });

  }

}
