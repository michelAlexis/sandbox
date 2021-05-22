import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export enum InteractiveRoutes {
  kanaStudy = 'kana-study',
}

const routes: Routes = [
  { path: InteractiveRoutes.kanaStudy, loadChildren: () => import('./kana-study/kana-study.module').then((m) => m.KanaStudyModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteractiveRoutingModule {}
