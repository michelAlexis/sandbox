import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LibArcgisRoutingModule } from './lib-arcgis-routing.module';
import { LibArcgisComponent } from './lib-arcgis.component';

@NgModule({
  imports: [LibArcgisRoutingModule, RouterModule],
  declarations: [LibArcgisComponent],
})
export class LibArcgisModule {}
