import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user: User = { username: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.user).subscribe(success => {
      if (success) {
        alert('Usuario registrado');
        this.router.navigate(['/auth/login']);
      }
    });
  }
}