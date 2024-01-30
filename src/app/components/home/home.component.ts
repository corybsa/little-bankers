import { Component } from '@angular/core';
import { TransactionsModule } from '../transactions/transactions.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TransactionsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
