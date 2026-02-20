import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionStore } from '../../../../../core/services/store/transaction.store';

@Component({
  selector: 'app-dsp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dsp.html',
  styleUrls: ['./dsp.scss']
})
export class Dsp {

  private store = inject(TransactionStore);

  transactions = this.store.transactions;
  logs = this.store.logs;

  total = this.store.totalCount;
  ach = this.store.achCount;
  wire = this.store.wireCount;
  card = this.store.cardCount;
}