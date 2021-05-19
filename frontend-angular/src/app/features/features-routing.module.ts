import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'lib-arcgis',
        loadChildren: () => import('./lib-arcgis/lib-arcgis.module').then((m) => m.LibArcgisModule),
      },
    ]),
  ],
})
export class FeaturesRoutingModule {}
