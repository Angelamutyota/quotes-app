export class Quotes {
  showDetails: boolean;
  constructor(public id: number, public name: string, public title: string, public quote: string, public dateWritten: Date, public ups: number, public downs: number,){
    this.showDetails= false;
  }
}
