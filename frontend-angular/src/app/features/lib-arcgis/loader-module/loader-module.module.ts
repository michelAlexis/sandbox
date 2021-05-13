import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderModuleComponent } from './loader-module.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    { path: '', component: LoaderModuleComponent },
  ])],
  declarations: [LoaderModuleComponent],
  bootstrap: [LoaderModuleComponent]
})
export class LoaderModuleModule {}