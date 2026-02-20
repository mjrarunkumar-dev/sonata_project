import {
  Component,
  OnInit,
  inject,
  signal,
  computed,
  ChangeDetectionStrategy
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Team2TableService, Team2Project } from '../services/team2table.service';

@Component({
  selector: 'app-team2-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team2-table.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Team2TableComponent implements OnInit {

  private Team2TableService = inject(Team2TableService);

  projects = signal<Team2Project[]>([]);
  loading = signal(true);

  pageSize = 5;
  currentPage = signal(1);

  ngOnInit() {
    this.Team2TableService.getProjects().subscribe({
      next: (data) => {
        console.log('📊 Team2 Projects:', data);
        this.projects.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('❌ Team2 API Error:', err);  
        this.loading.set(false);
      }
    });
  }

  totalPages = computed(() =>
    Math.ceil(this.projects().length / this.pageSize)
  );

  paginatedData = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.projects().slice(start, start + this.pageSize);
  });

  changePage(page: number) {
    this.currentPage.set(page);
  }
}
