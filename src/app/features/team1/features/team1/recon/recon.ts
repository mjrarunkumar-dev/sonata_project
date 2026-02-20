import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TransactionStore, TxType } from '../../../../../core/services/store/transaction.store';

@Component({
  selector: 'app-recon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recon.html',
  styleUrls: ['./recon.scss']
})
export class Recon {

  private http = inject(HttpClient);
  private store = inject(TransactionStore);

  isSubmitting = false;

  submitTransaction() {

    if (this.isSubmitting) return;

    this.isSubmitting = true;

    const tx = {
      id: crypto.randomUUID(),
      type: ['ACH', 'WIRE', 'CARD'][Math.floor(Math.random() * 3)] as TxType,
      amount: Math.floor(Math.random() * 5000) + 100,
      status: 'PENDING' as any,
      timestamp: Date.now()
    };

    // Optimistic insert
    this.store.addOptimistic(tx);

    // Call fake API (interceptor will handle logic)
    this.http.post('/api/reconcile', tx).subscribe({
      next: () => {
        this.store.reconcileSuccess(tx.id);
        this.isSubmitting = false;
      },
      error: () => {
        this.store.reconcileFailure(tx.id);
        this.isSubmitting = false;
      }
    });
  }
}