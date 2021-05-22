import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export enum GisRoutes {
  libArcgis = 'lib-arcgis',
}

const routes: Routes = [
  { path: GisRoutes.libArcgis, loadChildren: () => import('./lib-arcgis/lib-arcgis.module').then((m) => m.LibArcgisModule) },
  { path: '**', redirectTo: GisRoutes.libArcgis },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GisRoutingModule {}
