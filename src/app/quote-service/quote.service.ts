import { Injectable } from '@angular/core';
import { quotes } from '../quoteList';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  getQuotes(){
    return quotes
  }
  constructor() { }
}
