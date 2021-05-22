import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LibArcgisRoutingModule } from './lib-arcgis-routing.module';
import { LibArcgisComponent } from './lib-arcgis.component';
import { TabsRoutingModule } from 'src/app/shared/modules/tabs-routing/tabs-routing.module';

@NgModule({
  imports: [
    // Angular
    RouterModule,

    // Modules
    LibArcgisRoutingModule,
    TabsRoutingModule,
  ],
  declarations: [LibArcgisComponent],
})
export class LibArcgisModule {}
