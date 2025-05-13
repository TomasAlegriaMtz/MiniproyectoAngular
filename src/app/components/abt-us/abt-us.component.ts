import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-abt-us',
  standalone:true,
  imports: [CommonModule, RouterModule],
  templateUrl: './abt-us.component.html',
  styleUrl: './abt-us.component.css'
})
export class AbtUsComponent {

}
