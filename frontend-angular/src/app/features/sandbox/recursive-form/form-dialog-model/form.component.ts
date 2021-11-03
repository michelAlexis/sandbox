import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { DialogComponent } from '../form-dialog/dialog/dialog.component';
import { Box } from '../recursive-form.model';

export enum FormControls {
  name = 'name',
  children = 'children'
}

@UntilDestroy()
@Component({
  selector: 'app-recursive-form-form-dialog-model',
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormDialogNgModelComponent),
      multi: true
    },
  ]
})
export class FormDialogNgModelComponent implements OnInit, ControlValueAccessor {

  @Output()
  readonly remove = new EventEmitter<void>();

  public box: Box = { name: null, children: [] };

  private _onChange: (value: Box | null | undefined) => void;
  private _onTouched: (value: Box | null | undefined) => void;

  constructor(private readonly dialog: MatDialog,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  writeValue(obj: Box): void {
    this.box = obj;
    this.cdr.markForCheck();
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // isDisabled ? this.form.disable() : this.form.enable();
  }
  
  public addChild(): void {
    this.createInDialog().pipe(
      untilDestroyed(this)
    ).subscribe(box => {
      if(box) {
        if(!this.box?.children) {
          this.box.children = [];
        }
        this.box.children.push(box);
        if(this._onChange) {
          this._onChange(this.box);
        }
        this.cdr.markForCheck();
      }
    })
  }

  public editBox(): void {
    this.editInDialog(this.box).pipe(
      untilDestroyed(this)
    ).subscribe(box => {
      if(box) {
        this.box = box;
        if(this._onChange) {
          this._onChange(this.box);
        }
        this.cdr.markForCheck();
      }
    })
  }

  public removeBox(index: number): void {
    if(this.box?.children) {
      this.box.children.splice(index, 1);
    }
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
