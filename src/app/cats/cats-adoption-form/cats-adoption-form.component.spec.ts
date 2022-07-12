import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsAdoptionFormComponent } from './cats-adoption-form.component';

describe('CatsAdoptionFormComponent', () => {
  let component: CatsAdoptionFormComponent;
  let fixture: ComponentFixture<CatsAdoptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsAdoptionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsAdoptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
