import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule)}
    ])
  ]
})
export class FeaturesRoutingModule { }
