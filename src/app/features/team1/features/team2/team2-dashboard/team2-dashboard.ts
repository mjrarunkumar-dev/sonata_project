import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team2HeaderComponent } from '../team2-header/team2-header';
import { Team2TableComponent } from '../team2-table/team2-table';

import { Team2Sidebar } from '../team2-sidebar/team2-sidebar';

@Component({
  selector: 'app-team2-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    Team2Sidebar,
    Team2HeaderComponent,
    Team2TableComponent
  ],
  templateUrl: './team2-dashboard.html',
  styleUrls: ['./team2-dashboard.scss']
})
export class Team2DashboardComponent {}
