import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TransactionListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TransactionListComponent
  ]
})
export class TransactionsModule { }
