import { Component, DoCheck } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements DoCheck {
  user!: string;
  isLogged: boolean = false;
  showLogout: boolean = false;

  ngDoCheck(): void {
    try {
      const isLoggedRaw = localStorage.getItem('isLoggedIn');
      const userRaw = localStorage.getItem('userLogueado');

      this.isLogged = isLoggedRaw ? Boolean(JSON.parse(isLoggedRaw)) : false;
      this.user = userRaw ? JSON.parse(userRaw) : '';
      this.showLogout = true;
    } catch (error) {
      console.error('Error al leer del localStorage:', error);
      this.isLogged = false;
      this.user = '';
    }
  }

  logout(): void {
    this.isLogged = false;
    this.user = '';
    this.showLogout = false;
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('userLogueado', '');
  }

}
