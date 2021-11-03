import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { FormDialogComponent } from './form-dialog/form.component';
import { FormComponent } from './form/form.component';
import { RecursiveFormComponent } from './recursive-form.component';
import { DialogComponent } from './form-dialog/dialog/dialog.component';
import { FormDialogNgModelComponent } from './form-dialog-model/form.component';



@NgModule({
  declarations: [
    RecursiveFormComponent,
    FormComponent,
    FormDialogComponent,
    DialogComponent,
    FormDialogNgModelComponent,
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
    MatDialogModule,
  ]
})
export class RecursiveFormModule { }
