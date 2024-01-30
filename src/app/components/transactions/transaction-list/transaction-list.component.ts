import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent {
  data = [
    {
      id: 1,
      type: 'send',
      to: 'Bob Ross',
      amount: 100,
      description: 'water bill'
    },
    {
      id: 2,
      type: 'receive',
      from: 'Tony Stark',
      amount: 50,
      description: 'mow lawn'
    },
  ];

  getTitle(item: typeof this.data[0]): string {
    if(item.type === 'send') {
      return `You paid ${item.to}`;
    } else {
      return `${item.from} paid you`;
    }
  }

  getSubTitle(item: typeof this.data[0]): string {
    return item.description;
  }
}
