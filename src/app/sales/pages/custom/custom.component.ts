import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styles: [
  ]
})
export class CustomComponent implements OnInit {

  currentDate = new Date();
  paymentDate: string = '2022-08-20';

  constructor() { }

  ngOnInit(): void {
  }

}
