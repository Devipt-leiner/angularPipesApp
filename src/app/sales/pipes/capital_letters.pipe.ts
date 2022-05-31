import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'CapitalLetter'
})

export class CapitaLettersPipe implements PipeTransform {

  transform(value: string, isCapitalLetter: boolean = true):string {
    // if (isCapitalLetter) {
    //   return value.toUpperCase();
    // } else {
    //   return value.toLowerCase();
    // }

    return (isCapitalLetter) ? value.toUpperCase() : value.toLowerCase();
  }

}
