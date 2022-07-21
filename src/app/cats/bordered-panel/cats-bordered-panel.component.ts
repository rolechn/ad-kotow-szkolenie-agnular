import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cats-bordered-panel',
  templateUrl: './cats-bordered-panel.component.html',
  styleUrls: ['./cats-bordered-panel.component.scss']
})
export class CatsBorderedPanelComponent implements OnInit {

  constructor() {
  }

  backgroundFlipped: boolean;

  ngOnInit(): void {
  }

  onHover(): void {
    this.backgroundFlipped = !this.backgroundFlipped;
  }

  offHover(): void {
    this.backgroundFlipped = !this.backgroundFlipped;
  }
}
