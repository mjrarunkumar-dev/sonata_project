import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html'
})
export class DashboardComponent {

  private auth = inject(AuthService);
  private router = inject(Router);

  role = this.auth.role;

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
