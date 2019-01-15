import { DateCountPipe } from './date-count.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuotesDetailsComponent,
    QuotesComponent,
    QuoteFormComponent,
    DateCountPipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
