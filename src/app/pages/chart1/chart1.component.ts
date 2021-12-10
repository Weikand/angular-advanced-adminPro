import {Component,} from '@angular/core';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styles: [
  ]
})
export class Chart1Component {
  public labels1 = [ 'Bread', 'Cola', 'Doritos' ];

  public data1 = [ 10, 15, 40 ];
}
