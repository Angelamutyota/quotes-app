import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Quotes } from '../quotes'
import { QuoteService } from '../quote-service/quote.service';
import { Quoty } from '../quote-class/quote'
import { Quote } from '@angular/compiler';
import { AlertService } from '../alert-service/alert.service';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {

  quote: Quoty;

  
  toggleDetails(index: string | any){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  goToUrl (id){
    this.router.navigate(['/quotes',id])
  }
  
  deleteQuote( index){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].title}?`)
      if (toDelete){
        this.quotes.splice(index,1)
        this.alertService.alertMe("the quote has been deleted")
    
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  quotes: Quotes[];
  alertService:AlertService
  constructor(quoteService:QuoteService, alertService:AlertService, private quoteServices: QuoteRequestService, private router:Router) {
    this.quotes = quoteService.getQuotes()
    this.alertService = alertService;
   }

  ngOnInit(): void {
     
    this.quoteServices.quoteRequest()
    this.quote = this.quoteServices.quote
  }

}
