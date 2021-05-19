import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LayoutManager } from '../layout.manager';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent {
  constructor(public layoutManager: LayoutManager) {}
}

