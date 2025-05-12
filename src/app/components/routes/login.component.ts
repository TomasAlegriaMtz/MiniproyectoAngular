import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { DomseguroPipe } from '../../domseguro.pipe';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, DomseguroPipe],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
/*Video*/
videoUrl: string = 'https://www.youtube.com/embed/5BB4yvRNEg0?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1';


  formulario!: FormGroup;
  accounts!: { username: string, password: string }[];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    const accountsRaw = localStorage.getItem('accounts');
    this.accounts = accountsRaw ? JSON.parse(accountsRaw) : [];

    if (this.accounts.length < 1) {
      const defaultAccounts = [
        { username: 'Admin01', password: 'password_admin01' },
        { username: 'Admin02', password: 'password_admin02' },
        { username: 'Admin03', password: 'password_admin03' }
      ];
      localStorage.setItem('accounts', JSON.stringify(defaultAccounts));
      this.accounts = defaultAccounts;
    }
    console.log(this.accounts);
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    let acc = this.accounts.find(us => us.username === this.formulario.get('username')?.value
      && us.password === this.formulario.get('password')?.value);

    console.log(acc);

    if (acc) {
      Swal.fire({
        icon: 'success',
        title: '¡Acceso concedido!',
        text: `Bienvenido, ${acc.username}`,
        confirmButtonText: 'Continuar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Guardar el estado y redirigir después de que el usuario confirme
          localStorage.setItem('userLogueado', JSON.stringify(this.formulario.get('username')?.value));
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigateByUrl('/').then(success => {
            console.log('Redirección exitosa:', success);
          }).catch(err => {
            console.error('Error en la redirección:', err);
          });
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error de autenticación',
        text: 'Usuario o contraseña incorrectos',
      });
      this.formulario.reset();
    }
  }
}