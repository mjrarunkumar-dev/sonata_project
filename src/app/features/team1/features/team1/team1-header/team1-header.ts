import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../core/services/auth.service';


@Component({
  selector: 'app-team1-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team1-header.html',
  styleUrls: ['./team1-header.scss']
})
export class Team1HeaderComponent {

  private auth = inject(AuthService);
  role = this.auth.role;
}
