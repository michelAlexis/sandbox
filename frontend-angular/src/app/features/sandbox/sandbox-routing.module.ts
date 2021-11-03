import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export enum SandboxRoutes {
  recursiveForm = 'recursive-form',
}

const routes: Routes = [
  { path: SandboxRoutes.recursiveForm, loadChildren: () => import('./recursive-form/recursive-form.module').then((m) => m.RecursiveFormModule) },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandboxRoutingModule { }
