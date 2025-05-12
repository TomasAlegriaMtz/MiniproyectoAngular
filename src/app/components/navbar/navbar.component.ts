import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent { 
  user!: string;
  isLogged: boolean = false;

  ngAfterViewInit(): void {
    this.isLogged = Boolean(JSON.parse(localStorage.getItem('isLoggedIn') || '')) || false;
    this.user = JSON.parse(localStorage.getItem('userLogueado') || '');
  }
}
