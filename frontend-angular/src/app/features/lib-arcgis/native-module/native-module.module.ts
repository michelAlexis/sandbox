import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NativeModuleComponent } from './native-module.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NativeModuleComponent },
  ])],
  declarations: [NativeModuleComponent]
})
export class NativeModuleModule {}