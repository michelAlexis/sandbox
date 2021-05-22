import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MenuItem } from './tabs-routing.model';

@Component({
  selector: 'app-tabs-routing',
  templateUrl: './tabs-routing.component.html',
  styleUrls: ['./tabs-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsRoutingComponent {
  @Input() items: MenuItem[];
  @Input() align: 'start' | 'center' | 'end' = 'start';
}
