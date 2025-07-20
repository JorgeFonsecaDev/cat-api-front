import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mockUser: User = { username: 'admin', password: '1234', email: 'admin@test.com' };
  private currentUser: User | null = null;

  login(username: string, password: string): Observable<boolean> {
    if (username === this.mockUser.username && password === this.mockUser.password) {
      this.currentUser = this.mockUser;
      return of(true);
    }
    return of(false);
  }

  register(user: User): Observable<boolean> {
    // Aquí deberías hacer un HTTP POST al backend (cuando esté disponible)
    this.mockUser = user;
    return of(true);
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  logout(): void {
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}