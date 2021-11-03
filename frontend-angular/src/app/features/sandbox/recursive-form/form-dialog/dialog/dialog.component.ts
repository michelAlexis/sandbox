import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Box } from '../../recursive-form.model';

export enum FormControls {
  name = 'name',
  children = 'children'
}

@UntilDestroy()
@Component({
  selector: 'app-recursive-form-form-dialog-dialog',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit {

  public form: FormGroup;

  public readonly FormControls = FormControls;

  constructor(private readonly fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data: Box,
              private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      [FormControls.name]: this.fb.control(this.data?.name, [Validators.required]),
      [FormControls.children]: this.fb.array(this.data?.children ?? [])
    });
  }

  validate(): void {
    if(this.form.valid) {
      const value = this.form.value;
      this.dialogRef.close(value);
    }
  }
}
