import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';   // 👈 IMPORTANT
import { TransactionStore } from '../../../../../core/services/store/transaction.store';
import { StreamService } from '../../../../../core/services/stream.service';

@Component({
  selector: 'app-team3-dashboard',
  standalone: true,
  imports: [CommonModule],   // 👈 THIS MUST BE HERE
  templateUrl: './team3-dashboard.html',
  styleUrls: ['./team3-dashboard.scss']
})
export class Team3DashboardComponent {

  
  private store = inject(TransactionStore);
  private stream = inject(StreamService);

  totalCount = this.store.totalCount;
  achCount = this.store.achCount;
  wireCount = this.store.wireCount;
  cardCount = this.store.cardCount;

  transactions = this.store.transactions;
  logs = this.store.logs;

  ngOnInit() {
    this.stream.startStream();
  }

  ngOnDestroy() {
    this.stream.stopStream();
  }
}