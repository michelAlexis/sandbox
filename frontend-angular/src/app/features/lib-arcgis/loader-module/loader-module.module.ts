import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderModuleComponent } from './loader-module.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: LoaderModuleComponent },
  ])],
  declarations: [LoaderModuleComponent],
  bootstrap: [LoaderModuleComponent]
})
export class LoaderModuleModule {}