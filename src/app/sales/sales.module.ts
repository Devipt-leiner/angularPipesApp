import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';

import { CapitaLettersPipe } from './pipes/capital_letters.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';


@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent,
    CapitaLettersPipe,
    FlyPipe,
    OrderPipe
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
