import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes [] = [
    {id:1, name: 'rising up', description: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'},
    {id:2, name: 'getting started', description: 'The way to get started is to quit talking and begin doing.' },
    {id:3, name: 'time', description: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."},
    {id:4, name: 'life', description: 'If life were predictable it would cease to be life, and be without flavor.'},
    {id:5, name: 'setting goals', description: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."},
    {id:6, name: 'making plans', description: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
