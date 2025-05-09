import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //user!: { username: string, password: string };
  formulario!: FormGroup;
  accounts!: { username: string, password: string }[];

  constructor(private formBuilder: FormBuilder) {
    const accountsRaw = localStorage.getItem('accounts');
    this.accounts = accountsRaw ? JSON.parse(accountsRaw) : [];

    //Ingresamos al localStorage si es que no existen
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

  //ahora revisamos el login
  login(): void {
    let acc = this.accounts.find(us => us.username === this.formulario.get('username')?.value
      && us.password === this.formulario.get('password')?.value);

    console.log(acc);

    if (acc) {
      Swal.fire({
        icon: 'success',
        title: '¡Acceso concedido!',
        text: `Bienvenido, ${acc.username}`,
      });
      localStorage.setItem('userLogueado', JSON.stringify(this.formulario.get('username')?.value));
      
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
