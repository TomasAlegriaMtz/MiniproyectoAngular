import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone:true,
  imports: [RouterOutlet, CommonModule, FooterComponent, NavbarComponent, HeaderComponent],
  templateUrl: './content.component.html',
styleUrls: ['./content.component.css']
})
export class ContentComponent {

}
