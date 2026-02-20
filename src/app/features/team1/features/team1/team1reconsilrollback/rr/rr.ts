import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionStore } from '../../../../../../core/services/store/transaction.store';

@Component({
  selector: 'app-rr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rr.html',
  styleUrls: ['./rr.scss']
})
export class Rr {

  private store = inject(TransactionStore);

  transactions = this.store.transactions;

  submitTransaction() {
    const tx = {
      id: crypto.randomUUID(),
      type: ['ACH', 'WIRE', 'CARD'][Math.floor(Math.random() * 3)] as any,
      amount: Math.floor(Math.random() * 5000) + 100,
      status: 'PENDING' as any,
      timestamp: Date.now()
    };

    this.store.addOptimistic(tx);

    setTimeout(() => {
      const success = Math.random() > 0.2;
      success
        ? this.store.reconcileSuccess(tx.id)
        : this.store.reconcileFailure(tx.id);
    }, 3000);
  }
}