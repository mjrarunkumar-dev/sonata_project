import {
  Component,
  signal,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface AuditLog {
  id: string;
  type: string;
  amount: number;
  approvedBy: string;
  approvedAt: string;
  action: string;
}

@Component({
  selector: 'app-team1-audit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team1-audit.html',
  styleUrls: ['./team1-audit.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Team1AuditComponent {

  auditLogs = signal<AuditLog[]>([
    {
      id: '1',
      type: 'CARD',
      amount: 58963,
      approvedBy: 'Manager Raj',
      approvedAt: '2026-02-15T14:20:00',
      action: 'Approved'
    },
    {
      id: '2',
      type: 'WIRE',
      amount: 36524,
      approvedBy: 'Supervisor Anand',
      approvedAt: '2026-02-17T10:15:00',
      action: 'Rejected'
    }
  ]);

}