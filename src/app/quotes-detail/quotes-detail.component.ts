import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
   
  @Input() quotes!: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }
  upvote(){
    this.quotes.ups+=1;
  }
  downvote(){
    this.quotes.downs+=1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
