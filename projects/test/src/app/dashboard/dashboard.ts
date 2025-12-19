import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  selectedDashboardId = '1'; // default on load
  isTargetOpen = true;
  constructor(private route: ActivatedRoute, private router: Router) {}

  onDashboardSelect(id: string) {
    this.selectedDashboardId = id;
  }

  openTargetComponent() {
    this.isTargetOpen = true;
    this.router.navigate(['/dashboard', { outlets: { target: ['target'] } }]);
  }

  closeTargetComponent() {
    this.isTargetOpen = false;
    this.router.navigate(['/dashboard', { outlets: { target: null } }]);
  }
}
