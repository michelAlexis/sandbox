import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeaturesRoutes } from './features.contants';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: FeaturesRoutes.gis,
        loadChildren: () => import('./gis/gis.module').then((m) => m.GisModule),
      },
    ]),
  ],
})
export class FeaturesRoutingModule {}
