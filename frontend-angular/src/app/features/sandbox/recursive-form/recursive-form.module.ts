import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursiveFormComponent } from './recursive-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    RecursiveFormComponent,
    FormComponent
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule.forChild([{ path: '', component: RecursiveFormComponent }]),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RecursiveFormModule { }
