import { NgModule } from '@angular/core';

import { LibArcgisRoutingModule } from './lib-arcgis-routing.module';
import { LibArcgisComponent } from './lib-arcgis.component';
import { LoaderModuleComponent } from './loader-module/loader-module.component';
import { NativeModuleComponent } from './native-module/native-module.component';


@NgModule({
  imports: [ LibArcgisRoutingModule ],
  declarations: [ LibArcgisComponent, LoaderModuleComponent, NativeModuleComponent ]
})
export class LibArcgisModule {
}
