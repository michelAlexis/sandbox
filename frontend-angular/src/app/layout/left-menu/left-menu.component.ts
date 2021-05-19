import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LayoutManager } from '../layout.manager';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftMenuComponent {
  constructor(public layoutManager: LayoutManager) {}
}
