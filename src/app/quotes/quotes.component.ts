import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes [] = [
    new Quotes(1, 'Angela Mutyota', 'Rising Up', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', new Date(2020,4,8), 0, 0),
    new Quotes(2, 'Imelda Mita', 'Getting Started', 'The way to get started is to quit talking and begin doing.', new Date (2019,3,19), 0, 0 ),
    new Quotes(3, 'Martin Noti','Time Management', "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", new Date (2016,6,12),0 ,0),
    new Quotes(4, 'Letti Wan', 'Flavoured Life', 'If life were predictable it would cease to be life, and be without flavor.', new Date (2017,5,14), 0, 0),
    new Quotes(5, 'Satin Ola', 'setting goals', "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", new Date( 2010,7,7), 0, 0),
    new Quotes(6, 'Messi Patty', 'Setting Goals', "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", new Date (2014,9,30), 0, 0),
  ];

  toggleDetails(index: string | any){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  
  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
        this.quotes.splice(index,1)
    }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
