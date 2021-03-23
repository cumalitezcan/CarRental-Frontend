import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weeklyRent'
})
export class WeeklyRentPipe implements PipeTransform {

  transform(value: number, weekly: number): number {
    return value*weekly;
  }

}
