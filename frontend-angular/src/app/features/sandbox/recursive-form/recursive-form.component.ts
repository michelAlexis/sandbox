import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-recursive-form',
  templateUrl: './recursive-form.component.html',
  styleUrls: ['./recursive-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecursiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
