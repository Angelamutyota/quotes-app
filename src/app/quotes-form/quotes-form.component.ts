import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuote = new Quotes(0,"","","", new Date(),0,0);
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(){
    this.addQuote.emit(this.newQuote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
