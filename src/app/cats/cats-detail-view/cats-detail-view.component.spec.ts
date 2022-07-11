import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsDetailViewComponent } from './cats-detail-view.component';

describe('CatsDetailViewComponent', () => {
  let component: CatsDetailViewComponent;
  let fixture: ComponentFixture<CatsDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
