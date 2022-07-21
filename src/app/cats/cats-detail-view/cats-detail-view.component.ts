import { Component, OnInit } from '@angular/core';
import { Cat } from '../model';
import { CatsDataService } from '../cats-data.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
//import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { CatsDetailService } from './cats-detail.service';



@Component({
  selector: 'app-cats-detail-view',
  templateUrl: './cats-detail-view.component.html',
  styleUrls: ['./cats-detail-view.component.scss']
})
export class CatsDetailViewComponent implements OnInit {

  constructor(private catsDetailService: CatsDetailService, private catsDataService: CatsDataService, private activatedRoute: ActivatedRoute) {
    this.route = activatedRoute.snapshot;
  }

  cat: Cat;
  adoptionFormActive: boolean;
  showConfirmMsg: boolean;
  private route: ActivatedRouteSnapshot;
  actualCatPickUrlPosition: number;


  ngOnInit(): void {
    const catName = this.route.params['catName'];
    this.actualCatPickUrlPosition = 0;
    this.catsDataService.getCat(catName).subscribe(data => this.cat = data);
  }

  openAdoptionForm(): void {
    this.adoptionFormActive = true;

  }

  onFormClose(success: boolean) {
    this.adoptionFormActive = false;
    this.showConfirmMsg = success;
    this.cat.reservation = true;
  }

  checkVaccination(vaccinated: boolean): string {
    if (vaccinated=== true)
      return "\u2713";
    else
      return '\u274C';
  }

  scrollImageUp() {
    this.actualCatPickUrlPosition =
      this.catsDetailService.getScrolledUpImagePosition(this.cat, this.actualCatPickUrlPosition)
  }

  scrollImageDown() {
    this.actualCatPickUrlPosition =
      this.catsDetailService.getScrolledDownImagePosition(this.cat, this.actualCatPickUrlPosition)
  }

}
