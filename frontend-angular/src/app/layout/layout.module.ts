import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule as AngularLayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { LayoutComponent } from './layout.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';

@NgModule({
  declarations: [LayoutComponent, TopBarComponent, LeftMenuComponent],
  imports: [
    // Angular
    CommonModule,
    AngularLayoutModule,

    // Material
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
