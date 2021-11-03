import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Box } from '../recursive-form.model';

export enum FormControls {
  name = 'name',
  children = 'children'
}

@UntilDestroy()
@Component({
  selector: 'app-recursive-form-form',
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormComponent),
      multi: true
    }
  ]
})
export class FormComponent implements OnInit, ControlValueAccessor {

  public form: FormGroup;

  public readonly FormControls = FormControls;

  @Output()
  readonly remove = new EventEmitter<void>();

  public get childrenCtrl(): FormArray {
    return this.form.get(FormControls.children) as FormArray;
  }

  private _onChange: (value: Box | null | undefined) => void;
  private _onTouched: (value: Box | null | undefined) => void;

  constructor(private readonly fb: FormBuilder, private readonly cdr: ChangeDetectorRef) { }

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
    this.childrenCtrl.push(this.fb.control({
      [FormControls.name]: null,
      [FormControls.children]: []
    }));
    this.cdr.markForCheck();
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
}
