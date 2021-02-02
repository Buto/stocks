// import dependencies
import { Component      } from '@angular/core';
import { StocksService  } from '../../services/stocks.service';

// Declare component metadata
@Component({
  selector: 'manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})

// Define the ManageComponent class
export class ManageComponent  {

  symbols: Array< string >;
  stock:   string;

  constructor( private service: StocksService ) {
      // get the current list of symbols during class instantiation
      this.symbols = service.get();
  }

  // method to add a new stock to the collection
  add() {
      this.symbols.push( this.stock.toUpperCase() );
      //this.symbols = this.service.add( this.stock.toUpperCase() );
      this.stock = '';
  }

  // method to remove a stock from the collection
  remove(symbol) {
      this.symbols = this.service.remove( symbol );
  }
}
