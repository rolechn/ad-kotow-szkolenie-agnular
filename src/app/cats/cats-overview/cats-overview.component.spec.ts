import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsOverviewComponent } from './cats-overview.component';

describe('CatsOverviewComponent', () => {
  let component: CatsOverviewComponent;
  let fixture: ComponentFixture<CatsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
