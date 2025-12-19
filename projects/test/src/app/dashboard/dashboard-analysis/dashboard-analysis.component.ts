import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-analysis',
  standalone: false,
  templateUrl: './dashboard-analysis.component.html',
  styleUrl: './dashboard-analysis.component.scss'
})
export class DashboardAnalysisComponent {
@Input() dashboardId!: string;

  data: any[] = [];

  ngOnChanges() {
    this.loadData(this.dashboardId);
  }

  loadData(id: string) {
    this.data = [
      { name: 'Row A', value: id + '00' },
      { name: 'Row B', value: id + '50' }
    ];
  }
}
