import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [HeaderComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  name: string = 'Pandukumar';
  description: string = 'Welcome to your personalized space! Here, you can explore, learn, and grow.';

  constructor(private route:Router){}
  onGetStarted(): void {
    console.log(`${this.name} clicked Get Started!`);
    this.route.navigate(['index/landing'], { queryParamsHandling : 'preserve'});
  }
}
