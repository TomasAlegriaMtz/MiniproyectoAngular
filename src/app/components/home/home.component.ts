import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BlogComponent } from "../blog/blog.component";
import { AbtUsComponent } from '../abt-us/abt-us.component';
import { VideosComponent } from '../videos/videos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BlogComponent, AbtUsComponent, VideosComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
