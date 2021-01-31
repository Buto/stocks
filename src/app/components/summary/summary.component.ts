
// inport the dependencies
import { Component, Input } from '@angular/core';

// declare the component's metadata
@Component({
    selector: 'summary',
    styleUrls: ['./summary.component.css'],
    templateUrl: './summary.component.html'
})

// export the Summary component class
export class SummaryComponent {
    @Input() stock: any;

    isNegative() {
        return (this.stock && this.stock.change < 0 );
    }

    isPositive() {
        return (this.stock && this.stock.change > 0 );
    }
}






//import { Component, OnInit } from '@angular/core';
//
//@Component({
//  selector: 'app-summary',
//  templateUrl: './summary.component.html',
//  styleUrls: ['./summary.component.css']
//})
//export class SummaryComponent implements OnInit {
//
//  constructor() { }
//
//  ngOnInit() {
//  }
//
//}
//


