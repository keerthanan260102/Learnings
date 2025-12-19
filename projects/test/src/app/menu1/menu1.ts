import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../Interfaces/menu1item';

@Component({
  selector: 'app-menu1',
  standalone: false,
  templateUrl: './menu1.html',
  styleUrl: './menu1.scss',
})
export class Menu1 {
  menu1Form!: FormGroup;
  items: Item[] = [];
  mode: 'create' | 'edit' = 'create'; // to check create or edit
  editId: number | null = null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Detect mode from route
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mode = 'edit';
      this.editId = +id;
      this.loadItem(this.editId);
    }

    this.menu1Form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
    });
  }

  loadItem(id: number) {
    // Example: prefill form if editing
    const item = this.items.find((i) => i.id === id);
    if (item) {
      this.menu1Form.patchValue(item);
    }
  }

  onSubmit() {
    if (this.menu1Form.invalid) return;

    if (this.mode === 'create') {
      const newItem: Item = {
        id: this.items.length + 1,
        ...this.menu1Form.value,
      };
      this.items.push(newItem);
    } else if (this.mode === 'edit' && this.editId !== null) {
      const index = this.items.findIndex((i) => i.id === this.editId);
      if (index > -1) {
        this.items[index] = { id: this.editId, ...this.menu1Form.value };
      }
    }

    this.menu1Form.reset();
    this.mode = 'create';
    this.editId = null;
  }

  editItem(item: Item) {
    this.mode = 'edit';
    this.editId = item.id;
    this.menu1Form.patchValue(item);
  }

  deleteItem(id: number) {
    this.items = this.items.filter((i) => i.id !== id);
  }
}
