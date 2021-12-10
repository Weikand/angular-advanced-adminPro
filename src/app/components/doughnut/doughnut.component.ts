import {Component, Input, OnInit} from '@angular/core';
import {ChartData} from "chart.js";

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent implements OnInit {

  @Input() title: string = 'NoTitle'

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'Label 1', 'Label 2', 'Label 3' ];
  @Input('data') data: number[] = [350, 450, 100];
  public doughnutChartData!: ChartData<'doughnut'>;

  ngOnInit(): void {

    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: this.data }
      ]
    }
  }


}
