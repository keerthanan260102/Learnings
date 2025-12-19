import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Dashboard } from './dashboard/dashboard';
import { Menu1 } from './menu1/menu1';
import { Menu2 } from './menu2/menu2';
import { DashboardDesign } from './dashboard/dashboard-design/dashboard-design';
import { PageNotfound } from './page-notfound/page-notfound';
import { DashboardAnalysisComponent } from './dashboard/dashboard-analysis/dashboard-analysis.component';
import { DashboardViewComponent } from './dashboard/dashboard-view/dashboard-view.component';
import { TargetComponent } from './dashboard/target/target.component';

const routes: Routes = [
  {
    path: '',
    component: Landing,
    children: [
      // Initial load
      // Default route
      //  Child (nested) routes
      {
        path: '',
        component: Dashboard,
        children: [
          {
            path: '',
            outlet: 'target',
            component: TargetComponent,
          },
          {
            path: 'target',
            outlet: 'target',
            component: TargetComponent,
          },
        ],
      },
      //  Named outlet
      {
        path: 'dashboard',
        component: Dashboard,
        children: [
          {
            path: 'target',
            outlet: 'target',
            component: TargetComponent,
          },
        ],
      },
      { path: 'dashboard/:id', component: DashboardViewComponent }, // Dynamic route

      //  Static routes
      // Lazy-loaded menu modules
      {
        path: 'menu1',
        loadChildren: () =>
          import('./menu1/menu1-module').then((m) => m.Menu1Module),
      },
      {
        path: 'menu2',
        loadChildren: () =>
          import('./menu2/menu2-module').then((m) => m.Menu2Module),
      },
    ],
  },
  // ❗ Wildcard MUST be outside children
  // { path: '**', component: PageNotfound },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
