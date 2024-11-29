import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  moduleName!: string;
  reuseRoute!: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeData = this.route.snapshot.data;
    this.moduleName = routeData['Module'];
    this.reuseRoute = routeData['reuseRoute'];
    console.log('Module:', this.moduleName, 'Reuse Route:', this.reuseRoute);
  }
}
