
// import the component annotations

import { Component                      } from '@angular/core';
import { StocksService, StockInterface  } from './services/stocks.service';



//  define the component and its properties
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// create the component controller with a single property
export class AppComponent {
    //title = 'app works!';
    stocks: Array< StockInterface >;

    constructor( service: StocksService ) {
        service.load(['AAPL']).subscribe(stocks => {
            this.stocks = stocks;
        });
    }
}

