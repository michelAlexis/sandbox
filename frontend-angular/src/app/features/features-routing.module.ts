import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
      {
        path: FeaturesRoutes.interactive,
        loadChildren: () => import('./interactive/interactive.module').then((m) => m.InteractiveModule),
      },
      {
        path: FeaturesRoutes.sandbox,
        loadChildren: () => import('./sandbox/sandbox.module').then((m) => m.SandboxModule),
      }
    ]),
  ],
})
export class FeaturesRoutingModule {}
