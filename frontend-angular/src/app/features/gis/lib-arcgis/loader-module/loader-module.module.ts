import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { LoaderModuleComponent } from './loader-module.component';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoaderModuleComponent }]),

    // Material
    MatButtonModule
  ],
  declarations: [LoaderModuleComponent],
  bootstrap: [LoaderModuleComponent],
})
export class LoaderModuleModule {}
