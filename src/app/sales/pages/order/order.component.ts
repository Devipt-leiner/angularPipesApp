import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interface/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  isCapitalLetter: boolean = true;
  orderBy: string = '';
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    }
  ];

  capitalLetter () {
    this.isCapitalLetter = !this.isCapitalLetter;
  }

  changeOrder (value: string) {
    this.orderBy = value;
  }

}
