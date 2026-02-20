import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../core/services/auth.service';


@Component({
  selector: 'app-team2-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team2-header.html'
})
export class Team2HeaderComponent {

  private auth = inject(AuthService);
  role = this.auth.role;
}
