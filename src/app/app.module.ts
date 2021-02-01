
// import Angular dependencies needed
import { BrowserModule      } from '@angular/platform-browser';
import { NgModule           } from '@angular/core';
import { HttpClientModule   } from '@angular/common/http';
import { StocksService      } from './services/stocks.service';

// import the App component
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// use the NgModule notation to define a module by passing an object
@NgModule({

  // declarations are to list any components and directives used in the app
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent
  ],

  // imports are othre modules that are used in the app
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  // providers are any services used in the app
  providers: [StocksService],

  // Bootstrap declares which component to use as the first to bootstrap the application
  bootstrap: [AppComponent]
})

// Export an empty class, which gets annotated with configuration from NgModule
export class AppModule { }
