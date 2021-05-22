import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsRoutingComponent } from './tabs-routing.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TabsRoutingComponent],
  imports: [
    // Angular
    CommonModule,
    RouterModule,

    // Material
    MatTabsModule,
  ],
  exports: [TabsRoutingComponent],
})
export class TabsRoutingModule {}
