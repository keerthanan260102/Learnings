import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss']
})
export class Landing {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Navigate once on initial load to show both outlets
    this.router.navigate([
      '/dashboard',
      { outlets: { primary: ['design', 1], analysis: ['analysis', 1] } }
    ]);
  }
}
