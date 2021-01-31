
// import dependencies
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// declare a stock array
let stocks: Array<string> = [ 'AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR' ];

// declare API variables
let service: string = 'https://angular2-in-action-api.herokuapp.com';

// define and export TypeScrip interface for a stock object
export interface StockInterface
{
    symbol:             string;
    lastTradePriceOnly: number;
    change:             number;
    changeInPercent:    number;
}

// Annotates with injectable to wire-up dependency injection
@Injectable()


// defines class and exports it
export class StocksService {

  // constructor method to inject HttpClient service into class http property
  constructor( private http: HttpClient ) { }

  // method to get stocks
  get() {
      return stocks.slice();
  }

  // method to add a new stock to the list
  add(stock) {
      stocks.push(stock);
      return this.get();
  }

  //method to remove a stock from list
  remove( stock ) {
      stocks.splice(stocks.indexOf(stock), 1 );
      return this.get();
  }

  // method to call HttpClient service to load stock values from API
  load(symbols) {
      if (symbols) {
          return this.http.get< Array< StockInterface > >(service + '/stocks/snapshot?symbols=' + symbols.join() );
      }
  }
}


