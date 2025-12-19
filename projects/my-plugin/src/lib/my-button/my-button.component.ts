import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-my-button',
  standalone: false,
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss'],
})
export class MyButtonComponent {
  
  @Input() label = 'Button';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled = false;
  @Input() icon?: string;

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
