import { Component, OnInit } from '@angular/core';
import { Cat } from '../model';
import { CatsDataService } from '../cats-data.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-cats-detail-view',
  templateUrl: './cats-detail-view.component.html',
  styleUrls: ['./cats-detail-view.component.scss']
})
export class CatsDetailViewComponent implements OnInit {

  constructor(private catsDataService: CatsDataService, private activatedRoute: ActivatedRoute) {
    this.route = activatedRoute.snapshot;
  }

  cat: Cat;
  adoptionFormActive: boolean;
  showConfirmMsg: boolean;
  private route: ActivatedRouteSnapshot;
  picIndex: number = 0;

  ngOnInit(): void {
    const catName = this.route.params['catName'];
    this.catsDataService.getCat(catName).subscribe(data => this.cat = data);
  }

  openAdoptionForm(): void {
    this.adoptionFormActive = true;
  }

  onFormClose(success: boolean) {
    this.adoptionFormActive = false;
    this.showConfirmMsg = success;
  }

  IncrementIndex(){
    // const max = Math.max(this.picIndex);
    // if(this.picIndex > max){
    //   this.picIndex++
    // }
    
    this.picIndex++;
    if (this.picIndex > this.cat.picUrl.length -1) {
      this.picIndex = 0;
    }
  }

  DecrementIndex(){
    
    this.picIndex--;
    if(this.picIndex<0){
      this.picIndex = this.cat.picUrl.length -1 ;
    }
  }

  reserve(){
    this.cat.reserved = true;
  }
}
