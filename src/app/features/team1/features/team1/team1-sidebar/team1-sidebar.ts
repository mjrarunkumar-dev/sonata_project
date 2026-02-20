import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-team1-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './team1-sidebar.html',
  styleUrls: ['./team1-sidebar.scss']
})
export class Team1SidebarComponent {}