import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { RecursiveFormComponent } from './recursive-form.component';



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

    // Material
    MatCardModule,
    MatInputModule,
    MatTreeModule,
    MatButtonModule,
  ]
})
export class RecursiveFormModule { }
