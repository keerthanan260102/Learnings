import { NgModule } from '@angular/core';
import { MyButtonComponent } from './my-button/my-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MyButtonComponent],
  imports: [CommonModule],
  exports: [MyButtonComponent],
})
export class MyPluginModule {}
