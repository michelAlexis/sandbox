import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibArcgisComponent } from './lib-arcgis.component';
import { ArcgisFeatureRoutes } from './lib-arcgis.contants';

export const ROUTES: Routes = [
  {
    path: '',
    component: LibArcgisComponent,
    children: [
      {
        path: ArcgisFeatureRoutes.loader,
        loadChildren: () => import('./loader-module/loader-module.module').then((m) => m.LoaderModuleModule),
      },
      {
        path: ArcgisFeatureRoutes.native,
        loadChildren: () => import('./native-module/native-module.module').then((m) => m.NativeModuleModule),
      },
      {
        path: '',
        redirectTo: ArcgisFeatureRoutes.loader,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
})
export class LibArcgisRoutingModule {}
