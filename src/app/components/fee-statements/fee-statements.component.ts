import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { Payment } from '../../interfaces/payment';


const PAYMENT_DATA: Payment[] = [
  { name: 'Payment 1', date: new Date('2024-01-01'), method: 'Credit Card', amount: '100' },
  { name: 'Payment 2', date: new Date('2024-01-02'), method: 'PayPal', amount: '200' },
  { name: 'Payment 3', date: new Date('2024-01-03'), method: 'Bank Transfer', amount: '150' }
];

@Component({
  selector: 'app-fee-statements',
  standalone: true,
  imports: [MatTableModule, MatCardModule],
  templateUrl: './fee-statements.component.html',
  styleUrl: './fee-statements.component.scss'
})
export class FeeStatementsComponent {
  displayedColumns: string[] = ['name', 'date', 'method', 'amount'];
  dataSource = PAYMENT_DATA;

}
