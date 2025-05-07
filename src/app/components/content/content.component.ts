import { Component } from '@angular/core';
import { LoginComponent } from '../routes/login.component';

@Component({
  selector: 'app-content',
  imports: [LoginComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
