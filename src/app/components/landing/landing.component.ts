import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
// import { SidePanelComponent } from '../side-panel/side-panel.component';
// import { MainContentComponent } from '../main-content/main-content.component';
import { CommonModule } from '@angular/common';
import { ClientDashboardComponent } from '../client-dashboard/client-dashboard.component';
import { ProjectDashboardComponent } from '../project-dashboard/project-dashboard.component';

@Component({
  selector: 'app-landing',
  imports: [HeaderComponent,CommonModule,ClientDashboardComponent,ProjectDashboardComponent],
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

  selectedItem: any = '';

  onItemSelected(item: any): void {
    this.selectedItem = item;
    console.log('Selected Item:', this.selectedItem);
  }
}
