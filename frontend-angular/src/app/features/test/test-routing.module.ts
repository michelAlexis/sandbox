import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';

export const ROUTES: Routes = [
  { path: '', component: TestComponent }
]


@NgModule({
  imports: [RouterModule.forChild(ROUTES)]
})
export class TestRoutingModule { }
