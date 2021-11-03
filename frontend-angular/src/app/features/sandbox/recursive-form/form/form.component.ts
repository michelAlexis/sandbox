import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export enum FormControls {
  id = 'id',
  name = 'name',
  children = 'children'
}

@Component({
  selector: 'app-recursive-form-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  public form: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.buildBoxForm();
  }

  private buildBoxForm(): FormGroup {
    return this.fb.group({
      [FormControls.id]: this.fb.control(null),
      [FormControls.name]: this.fb.control(null, [Validators.required]),
      [FormControls.children]: this.fb.array([])
    });
  }

}
