import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-recursive-form',
  templateUrl: './recursive-form.component.html',
  styleUrls: ['./recursive-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecursiveFormComponent {
}
