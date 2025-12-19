import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu1RoutingModule } from './menu1-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { Menu1 } from './menu1';

@NgModule({
  declarations: [Menu1],
  imports: [CommonModule, ReactiveFormsModule, Menu1RoutingModule],
})
export class Menu1Module {}
