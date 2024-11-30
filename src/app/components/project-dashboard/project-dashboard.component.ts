import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-dashboard',
  imports:  [FormsModule,NgIf,NgFor,CommonModule],
  templateUrl: './project-dashboard.component.html',
  styleUrl: './project-dashboard.component.scss'
})
export class ProjectDashboardComponent {
  username: string = 'John Doe'; // Dynamic username can be set here
  searchQuery: string = '';
  selectedTab: string = 'recent'; // Default selected tab
  selectedClient: any = null;

  newClient = {
    name: '',
    email: '',
  };

  // Sample data for clients
  recentClients = [
    { name: 'Client A', email: 'clientA@example.com', projects: [{ name: 'Project 1' }] },
    { name: 'Client B', email: 'clientB@example.com', projects: [{ name: 'Project 2' }] },
  ];

  allClients = [
    { name: 'Client A', email: 'clientA@example.com', projects: [{ name: 'Project 1' }] },
    { name: 'Client B', email: 'clientB@example.com', projects: [{ name: 'Project 2' }] },
    { name: 'Client C', email: 'clientC@example.com', projects: [{ name: 'Project 3' }] },
  ];

  favoritesClients = [
    { name: 'Client A', email: 'clientA@example.com', projects: [{ name: 'Project 1' }] },
    { name: 'Client C', email: 'clientC@example.com', projects: [{ name: 'Project 3' }] },
  ];

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  selectClient(client: any): void {
    this.selectedClient = client;
  }

  createClient(): void {
    // Logic to create a new client, e.g., send data to API
    console.log('New Client Created:', this.newClient);
    this.allClients.push({ ...this.newClient, projects: [] }); // Add client to the allClients array
    this.newClient = { name: '', email: '' }; // Reset form fields
  }
}
