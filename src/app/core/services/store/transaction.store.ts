import { Injectable, signal, computed } from '@angular/core';

export type TxType = 'ACH' | 'WIRE' | 'CARD';
export type TxStatus = 'PENDING' | 'SUCCESS' | 'FAILED';

export interface Transaction {
  id: string;
  type: TxType;
  amount: number;
  status: TxStatus;
  timestamp: number;
  optimistic?: boolean;
}

@Injectable({ providedIn: 'root' })
export class TransactionStore {

  // -------------------------
  // RAW STATE
  // -------------------------

  private _transactions = signal<Transaction[]>([]);
  private _logs = signal<string[]>([]);

  // -------------------------
  // SELECTORS (Derived State)
  // -------------------------

  transactions = computed(() => this._transactions());

  totalCount = computed(() => this._transactions().length);

  achCount = computed(() =>
    this._transactions().filter(tx => tx.type === 'ACH').length
  );

  wireCount = computed(() =>
    this._transactions().filter(tx => tx.type === 'WIRE').length
  );

  cardCount = computed(() =>
    this._transactions().filter(tx => tx.type === 'CARD').length
  );

  logs = computed(() => this._logs());

  // -------------------------
  // ACTIONS
  // -------------------------

  ingestStream(tx: Transaction) {
    this._transactions.update(state => [tx, ...state]);
    this.log(`Stream Ingested: ${tx.id}`);
  }

  addOptimistic(tx: Transaction) {
  const optimisticTx: Transaction = {
    ...tx,
    status: 'PENDING' as TxStatus,
    optimistic: true
  };

  this._transactions.update(state => [optimisticTx, ...state]);
  this.log(`Optimistic Add: ${tx.id}`);
}

  reconcileSuccess(id: string) {
    this._transactions.update(state =>
      state.map(tx =>
        tx.id === id
          ? { ...tx, status: 'SUCCESS', optimistic: false }
          : tx
      )
    );
    this.log(`Reconciled SUCCESS: ${id}`);
  }

  reconcileFailure(id: string) {
    this._transactions.update(state =>
      state.map(tx =>
        tx.id === id
          ? { ...tx, status: 'FAILED', optimistic: false }
          : tx
      )
    );
    this.log(`Reconciled FAILURE: ${id}`);
  }

  rollback(id: string) {
    this._transactions.update(state =>
      state.filter(tx => tx.id !== id)
    );
    this.log(`Rollback Executed: ${id}`);
  }

  private log(message: string) {
    const timestamp = new Date().toISOString();
    this._logs.update(logs => [`${timestamp} - ${message}`, ...logs]);
  }
}