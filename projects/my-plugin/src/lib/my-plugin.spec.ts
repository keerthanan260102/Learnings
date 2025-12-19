import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlugin } from './my-plugin';

describe('MyPlugin', () => {
  let component: MyPlugin;
  let fixture: ComponentFixture<MyPlugin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPlugin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPlugin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
