import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KanaStudyComponent } from './kana-study.component';

@NgModule({
  declarations: [],
  imports: [
    // Angular
    CommonModule,
    RouterModule.forChild([{ path: '', component: KanaStudyComponent }]),
  ],
})
export class KanaStudyModule {}
