import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibArcgisComponent } from './lib-arcgis.component';

export const ROUTES: Routes = [
  { path: '',
    component: LibArcgisComponent,
    children: [
      { path: 'loader', loadChildren: () => import('./loader-module/loader-module.module').then(m => m.LoaderModuleModule) },
      { path: 'native', loadChildren: () => import('./native-module/native-module.module').then(m => m.NativeModuleModule) },
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(ROUTES)]
})
export class LibArcgisRoutingModule { }
