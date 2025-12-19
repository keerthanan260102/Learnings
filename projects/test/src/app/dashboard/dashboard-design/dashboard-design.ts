import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-design',
  standalone: false,
  templateUrl: './dashboard-design.html',
  styleUrl: './dashboard-design.scss',
})
export class DashboardDesign {
  dashboardId!: string;
  @Output() dashboardSelected = new EventEmitter<string>();

  constructor(private route: ActivatedRoute, private router: Router) {}

  dashboards = [
    { id: '1', title: 'Sales' },
    { id: '2', title: 'Finance' },
    { id: '3', title: 'Marketing' },
  ];
  selectedId: string | null = null;

  selectDashboard(id: string) {
    this.router.navigate(['/dashboard', id]);
    //this.selectedId = id;
  }
}
