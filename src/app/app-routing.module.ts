import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CatsDataResolver } from './cats/cats-overview/cats-data-resolver';
import { CatsOverviewComponent } from './cats/cats-overview/cats-overview.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'cats',
    pathMatch: 'full'
  },
  {
    path: 'cats',
    component: CatsOverviewComponent,
    resolve: {cats: CatsDataResolver}
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'top', anchorScrolling: 'enabled'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
