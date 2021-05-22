import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NativeModuleComponent } from './native-module.component';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    RouterModule.forChild([{ path: '', component: NativeModuleComponent }]),

    // Material
    MatButtonModule,
  ],
  declarations: [NativeModuleComponent],
})
export class NativeModuleModule {}
