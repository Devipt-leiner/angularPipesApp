import { Component } from '@angular/core';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {

  // i18nSelect
  name: string = 'Fernando';
  gender: string = 'masculino';

  invitationMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  customers: string[] = [
    'Maria',
    'Pedro',
    'Juan',
    'Leiner',
    'Maria',
    'Pedro',
    'Juan',
    'Leiner',
  ];

  customersMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    '=3': 'tenemos 3 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  changeCustomer () {
    this.name = 'Maria';
    this.gender = 'femenino'
  }

  deleteCustomer () {
    this.customers.pop();
  }
}
