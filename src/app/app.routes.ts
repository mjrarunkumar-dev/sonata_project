import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login';
import { Team1DashboardComponent } from './features/team1/features/team1/team1-dashboard/team1-dashboard';
import { Team2DashboardComponent } from './features/team1/features/team2/team2-dashboard/team2-dashboard';

import { Team1TableComponent } from './features/team1/features/team1/team1-table/team1-table';
import { Team1AuditComponent } from './features/team1/features/team1/team1-audit/team1-audit';
import { Team3DashboardComponent } from './features/team1/features/team3/team3-dashboard/team3-dashboard';
import { Rr } from './features/team1/features/team1/team1reconsilrollback/rr/rr';
import { Dsp } from './features/team1/features/team1/dsp/dsp';
import { Recon } from './features/team1/features/team1/recon/recon';

export const routes: Routes = [

  { path: '', component: LoginComponent },

  {
    path: 'team1',
    component: Team1DashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Team1TableComponent },
      { path: 'audit', component: Team1AuditComponent },
      { path: 'rr', component: Rr },
       { path: 'dsp', component: Dsp },
         { path: 'recon', component: Recon }
    ]
  },

  { path: 'team2', component: Team2DashboardComponent },

   { path: 'team3', component: Team3DashboardComponent },

  { path: '**', redirectTo: '' }

];