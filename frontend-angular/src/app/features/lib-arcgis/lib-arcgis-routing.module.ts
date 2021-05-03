import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibArcgisComponent } from './lib-arcgis.component';

export const ROUTES: Routes = [
  { path: '', component: LibArcgisComponent }
]


@NgModule({
  imports: [RouterModule.forChild(ROUTES)]
})
export class LibArcgisRoutingModule { }
