import { Injectable, signal } from '@angular/core';

export type UserRole = 'TEAM1' | 'TEAM2' | 'TEAM3';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _role = signal<UserRole | null>(null);

  role = this._role.asReadonly();

  login(username: string, password: string): boolean {

    // Hardcoded demo login
    if (username === 'ph' && password === '123') {
      this._role.set('TEAM1');
      return true;
    }

    if (username === 'team2' && password === '123') {
      this._role.set('TEAM2');
      return true;
    }

    if (username === 'team3' && password === '123') {
      this._role.set('TEAM3');
      return true;
    }

    return false;
  }

  logout() {
    this._role.set(null);
  }

  isLoggedIn(): boolean {
    return this._role() !== null;
  }

  hasRole(allowedRoles: UserRole[]): boolean {
    return this._role() !== null && allowedRoles.includes(this._role()!);
  }
}
