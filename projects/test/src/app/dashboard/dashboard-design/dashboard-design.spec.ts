import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDesign } from './dashboard-design';

describe('DashboardDesign', () => {
  let component: DashboardDesign;
  let fixture: ComponentFixture<DashboardDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardDesign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDesign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
