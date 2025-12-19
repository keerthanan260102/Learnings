import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-view',
  standalone: false,
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss',
})
export class DashboardViewComponent {
   @Input() selectedDashboardId!: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedDashboardId = params.get('id') || '1';
    });
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
