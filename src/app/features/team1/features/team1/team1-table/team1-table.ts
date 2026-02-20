import {
  Component,
  signal,
  computed,
  inject,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  Team1TransactionService,
  Team1Transaction
} from '../services/team1-table.service';

@Component({
  selector: 'app-team1-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team1-table.html',
  styleUrls: ['./team1-table.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Team1TableComponent implements OnInit {

  private transactionService = inject(Team1TransactionService);

  selectedTx = signal<Team1Transaction | null>(null);

  transactions = signal<Team1Transaction[]>([]);

  pageSize = 5;
  currentPage = signal(1);

  ngOnInit() {
    this.transactionService.getTransactions().subscribe({
      next: (data) => {
        
        this.transactions.set(data);
      },
      error: (err) => {
        console.error('❌ Team1 API Error:', err);
      }
    });
  }

  totalPages = computed(() =>
    Math.ceil(this.transactions().length / this.pageSize)
  );

  paginatedData = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.transactions().slice(start, start + this.pageSize);
  });

  changePage(page: number) {
    this.currentPage.set(page);
  }

  selectTransaction(tx: Team1Transaction) {
  this.selectedTx.set(tx);
}

closeDetails() {
  this.selectedTx.set(null);
}


}