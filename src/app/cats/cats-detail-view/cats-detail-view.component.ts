import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../model';

@Component({
  selector: 'app-cats-detail-view',
  templateUrl: './cats-detail-view.component.html',
  styleUrls: ['./cats-detail-view.component.css']
})
export class CatsDetailViewComponent implements OnInit {

  constructor() {
  }

  @Input()
  cat: Cat;

  ngOnInit(): void {
    this.cat = history.state.data;
  }

}
