import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {

  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

login() {
  const success = this.auth.login(this.username, this.password);

  if (success) {

    const role = this.auth.role();

    if (role) {
      this.router.navigate(['/' + role.toLowerCase()]);
    }

  } else {
    this.error = 'Invalid credentials';
  }
}



}
