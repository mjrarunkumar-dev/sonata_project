import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Team1HeaderComponent } from '../team1-header/team1-header';
import { Team1TableComponent } from '../team1-table/team1-table';
import {   Team1SidebarComponent } from '../team1-sidebar/team1-sidebar';
import { RouterOutlet } from "@angular/router";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-team1-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    Team1HeaderComponent,
     
    RouterOutlet,
    RouterModule,
    Team1SidebarComponent
],
  templateUrl: './team1-dashboard.html',
  styleUrls: ['./team1-dashboard.scss']
})
export class Team1DashboardComponent {}
