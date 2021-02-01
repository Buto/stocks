
// import dependencies
import { Component, OnInit              } from '@angular/core';
import { StocksService, StockInterface  } from '../../services/stocks.service';

//--------------------------------------------------------------------------
//  Note1:  An 'interface' is a means to enforce that a class has a
//          required method.  In the case said method is named ngOnInit.
//          Cite: pp. 45
//
//--------------------------------------------------------------------------

@Component({
    //selector: 'app-dashboard',
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// Export the DashboardComponent class, and
// implement the OnInit interface   See Note1.
export class DashboardComponent implements OnInit {

  // declare a property for holding an array of stocks
  stocks: Array< StockInterface >;

  // declare a property for holding an array of stock symbols
  symbols: Array< string >;


  constructor( private service: StocksService  ) {
      // get the stock symbols from the service after
      // the component is first constructed.
      this.symbols = service.get();
  }

  // ngOnInit() is a callback method that is invoked immediately after the
  // default change detector has checked the directive's data-bound properties for
  // the first time, and before any of the view or content children have been checked.
  //
  // It is invoked only once when the directive is instantiated.
  //
  ngOnInit() {
      this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks );
  }

}
