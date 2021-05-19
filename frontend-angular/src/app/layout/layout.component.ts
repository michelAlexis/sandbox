import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutManager } from './layout.manager';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  constructor(public layoutManager: LayoutManager) {}
}
