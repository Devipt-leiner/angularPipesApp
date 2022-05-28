import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameLower: string = 'leiner';
  nameUpper: string = 'LEINER';
  fullName: string = 'LeinER BArrIoS';

  date: Date = new Date(); // Día de hoy

}
