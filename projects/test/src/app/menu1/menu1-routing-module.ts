import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu1 } from './menu1';

const routes: Routes = [
  { path: '', component: Menu1 }, // default path
  { path: 'create', component: Menu1 }, // example create form
  { path: 'edit/:id', component: Menu1 } // edit form with dynamic id
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menu1RoutingModule {}
