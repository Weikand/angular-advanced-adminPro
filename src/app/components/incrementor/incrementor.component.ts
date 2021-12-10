import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styles: [
  ]
})
export class IncrementorComponent implements OnInit{

  @Input() progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() outputValue: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }

  changeValue( value: number ) {
    if ( this.progress + value >= 100){
      // this.outputValue.emit(100);
      this.progress = 100;
    } else if ( this.progress + value <= 0) {
      // this.outputValue.emit(0);
      this.progress = 0;
    } else {
      this.progress += value;
    }
    this.outputValue.emit(this.progress);
  }

  onChange(value: number) {
    this.changeValue(value);
    // this.outputValue.emit(value);
  }
}
