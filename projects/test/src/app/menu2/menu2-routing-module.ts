import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu2 } from './menu2';

const routes: Routes = [{ path: '', component: Menu2 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menu2RoutingModule {}
