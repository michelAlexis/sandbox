import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { KanaStudyComponent } from './kana-study.component';
import { RangePipeModule } from 'src/app/shared/pipes/range.pipe';

@NgModule({
  declarations: [KanaStudyComponent],
  imports: [
    // Angular
    CommonModule,
    RouterModule.forChild([{ path: '', component: KanaStudyComponent }]),

    // Material
    MatCardModule,

    // App
    RangePipeModule,
  ],
})
export class KanaStudyModule {}
