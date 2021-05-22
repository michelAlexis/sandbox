import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FeaturesRoutes } from 'src/app/features/features.contants';
import { GisRoutes } from 'src/app/features/gis/gis-routing.module';
import { LayoutManager } from '../layout.manager';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftMenuComponent {

  public readonly FeaturesRoutes = FeaturesRoutes;

  public readonly GisRoutes = GisRoutes;

  constructor(public layoutManager: LayoutManager) {}
}
