import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
  quotes = [
   new Quotes(1, 'It is your determination and persistence that will make you a successful person', ' Pablo Picasso', new Date(2019, 1, 4)),
   new Quotes(2, 'You can waste your lives drawing lines. Or you can live your life crossing them', '-Ayn Rand', new Date(2019, 2, 3)),
   new Quotes(3, 'Obstacles are those frightful things you see when you take your eyes off your goal', 'Dale Carne', new Date(2019, 1, 3)),
   new Quotes(4, 'Formula for success: rise early, work hard, strike oil', 'by -Pearl Buck', new Date(2019, 2, 23)),
   new Quotes(5, 'Action is the foundational key to all success', 'by George Eliot', new Date(2019, 3, 12))
  ];
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
