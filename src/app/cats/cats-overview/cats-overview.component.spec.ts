import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsOverviewComponent } from './cats-overview.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

describe('CatsOverviewComponent', () => {
  let component: CatsOverviewComponent;
  let fixture: ComponentFixture<CatsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CatsOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CatsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



