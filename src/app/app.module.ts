import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatsOverviewComponent } from './cats/cats-overview/cats-overview.component';
import { AppRoutingModule } from './app-routing.module';
import { CatsDetailViewComponent } from './cats/cats-detail-view/cats-detail-view.component';
import { CatsAdoptionFormComponent } from './cats/cats-adoption-form/cats-adoption-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CatsBorderedPanelComponent } from './cats/bordered-panel/cats-bordered-panel.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    CatsOverviewComponent,
    CatsDetailViewComponent,
    CatsAdoptionFormComponent,
    CatsBorderedPanelComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
