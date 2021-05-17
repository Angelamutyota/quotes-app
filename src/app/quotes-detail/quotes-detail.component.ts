import { Component, Input, OnInit } from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
   
  @Input()
  quotes!: Quotes;
  constructor() { }

  ngOnInit(): void {
  }

}
