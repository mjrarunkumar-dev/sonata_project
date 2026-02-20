import { Injectable, inject } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { TransactionStore, Transaction, TxType } from '../services/store/transaction.store';

@Injectable({ providedIn: 'root' })
export class StreamService {

  private store = inject(TransactionStore);
  private streamSub?: Subscription;

  startStream() {

    // 20ms interval = 50 transactions per second
    this.streamSub = interval(20).subscribe(() => {

      const tx: Transaction = {
        id: crypto.randomUUID(),
        type: this.randomType(),
        amount: this.randomAmount(),
        status: 'SUCCESS',
        timestamp: Date.now()
      };

      this.store.ingestStream(tx);

    });

    console.log('🚀 Streaming Started');
  }

  stopStream() {
    this.streamSub?.unsubscribe();
    console.log('🛑 Streaming Stopped');
  }

  private randomType(): TxType {
    const types: TxType[] = ['ACH', 'WIRE', 'CARD'];
    return types[Math.floor(Math.random() * types.length)];
  }

  private randomAmount(): number {
    return Math.floor(Math.random() * 10000) + 100;
  }
}