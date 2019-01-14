import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
  quotes = [];
  completeQuote(isComplete, index) {
        if (isComplete) {
            this.quotes.splice(index, 1);
            }
            }
  toogleDetails(index) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

  deleteQuotes(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete${this.quotes[index].name}`);
       if (toDelete) {
         this.quotes.splice(index, 1);
       }
     }
    }

     addNewQuotes(quotes) {
        const quotesLength = this.quotes.length;
        quotes.id = quotesLength + 1;
        quotes.completeDate = new Date(quotes.completeDate);
        this.quotes.push(quotes);

    }


  constructor() { }

  ngOnInit() {
  }
}
