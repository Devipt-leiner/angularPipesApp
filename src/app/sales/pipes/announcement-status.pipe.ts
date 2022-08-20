import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'announcementStatus',
})
export class AnnouncementStatusPipe implements PipeTransform {
  transform(value: string): string {
    // El value llega en formato: 'AAAA-MM-DD' y con el método split() creo un array del mismo.
    const paydayLimit = value.split('-');

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    if (Number(paydayLimit[0]) > currentYear) {
      return 'En curso';
    }
    else if (Number(paydayLimit[0]) < currentYear) {
      return 'Convocatoria cerrada';
    } else {
      if (Number(paydayLimit[1]) < currentMonth) {
        return 'Convocatoria cerrada';
      }

      if (Number(paydayLimit[1]) === currentMonth + 1) {
        if (Number(paydayLimit[2]) >= currentDay) {
          return 'En curso';
        } else {
          return 'Convocatoria cerrada';
        }
      }

      if (Number(paydayLimit[1]) > currentMonth) {
        return 'En curso';
      }

    }

    return '';
  }
}
