import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DatecountPipe implements PipeTransform {

  transform(value: any): number {
    let today:any = new Date(); //get current date and time
    // let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(value-today)// returns value in milliseconds
    const secondsInAnHour= 3600; //60 seconds*60 minutes in an hour

    var dateDifferenceSeconds=dateDifference*0.001; //converts to seconds

    var dateCounter = Math.round(dateDifferenceSeconds/secondsInAnHour);
    // var dateCounter = (dateCounter;


    if (dateCounter >= 1){
        return dateCounter;
    }else{
        return 0;
    }
  }
}



