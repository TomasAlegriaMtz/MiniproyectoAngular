import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user!: { username: string, password: string };

  constructor() { this.user = { username: '', password: '' } }

  login(): void {
    const accountsRaw = localStorage.getItem('accounts');
    let acc: { username: string, password: string }[] = accountsRaw ? JSON.parse(accountsRaw) : [];

    console.log(this.user);

    if (acc.length > 0) {
      const match = acc.find(us => us.username === this.user.username && us.password === this.user.password);
      if (match) {
        Swal.fire({
          icon: 'success',
          title: '¡Acceso concedido!',
          text: `Bienvenido, ${match.username}`,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error de autenticación',
          text: 'Usuario o contraseña incorrectos',
        });

        this.user = { username: '', password: '' };
      }

    } else {
      const defaultAccounts = [
        { username: 'Admin01', password: 'password_admin01' },
        { username: 'Admin02', password: 'password_admin02' },
        { username: 'Admin03', password: 'password_admin03' }
      ];

      localStorage.setItem('accounts', JSON.stringify(defaultAccounts));
    }
  }
}
