import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, of } from 'rxjs';
import { FormComponent } from '../form/form.component';
import { Box } from '../recursive-form.model';
import { DialogComponent } from './dialog/dialog.component';

export enum FormControls {
  name = 'name',
  children = 'children'
}

@UntilDestroy()
@Component({
  selector: 'app-recursive-form-form-dialog',
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormDialogComponent),
      multi: true
    },
  ]
})
export class FormDialogComponent implements OnInit, ControlValueAccessor {

  public form: FormGroup;

  public readonly FormControls = FormControls;

  @Output()
  readonly remove = new EventEmitter<void>();

  @Output()
  readonly edit = new EventEmitter<void>();

  public get childrenCtrl(): FormArray {
    return this.form.get(FormControls.children) as FormArray;
  }

  private _onChange: (value: Box | null | undefined) => void;
  private _onTouched: (value: Box | null | undefined) => void;

  constructor(private readonly fb: FormBuilder,
              private readonly cdr: ChangeDetectorRef,
              private readonly dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = this.buildBoxForm();
    
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe(v => {
      console.log('Value changed');
      if(this._onChange) {
        this._onChange(v);
      }
    })
  }

  writeValue(obj: Box): void {
    this.form.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }
  
  public addChild(): void {
    //! Use FormControl NOT GROUP
    this.createInDialog().pipe(
      untilDestroyed(this)
    ).subscribe(box => {
      if (box) {
        this.childrenCtrl.push(this.fb.control({
          [FormControls.name]: box.name,
          [FormControls.children]: box.children ?? []
        }));
        this.cdr.markForCheck();
      }
    })
  }

  public editBox(index: number): void {
    const boxCtrl = this.childrenCtrl.at(index);
    this.editInDialog(boxCtrl.value).pipe(
      untilDestroyed(this)
    ).subscribe(box => {
      if(box) {
        boxCtrl.patchValue(box);
      }
    })
  }

  public removeBox(index: number): void {
    this.childrenCtrl.removeAt(index);
  }

  private buildBoxForm(): FormGroup {
    return this.fb.group({
      [FormControls.name]: this.fb.control(null, [Validators.required]),
      [FormControls.children]: this.fb.array([])
    });
  }

  private createInDialog(): Observable<Box | null> {
    const dialogRef = this.dialog.open(DialogComponent);
    return dialogRef.afterClosed();
  }

  private editInDialog(box: Box): Observable<Box | null> {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: box
    });
    return dialogRef.afterClosed();
  }
}
