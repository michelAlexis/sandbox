import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FeaturesRoutes } from 'src/app/features/features.contants';
import { GisRoutes } from 'src/app/features/gis/gis-routing.module';
import { MenuItem } from 'src/app/models/layout.model';
import { LayoutManager } from '../layout.manager';

declare type NavTree = (MenuItem & {children?: MenuItem[]})[]

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftMenuComponent {
  public readonly FeaturesRoutes = FeaturesRoutes;

  public readonly GisRoutes = GisRoutes;

  public readonly menuTree: NavTree = [
    { label: 'Home', routerLink: FeaturesRoutes.home, icon: 'home' },
    { label: 'GIS',
      routerLink: FeaturesRoutes.gis,
      icon: 'map',
      children: [
        { label: 'Arcgis', routerLink: [FeaturesRoutes.gis, GisRoutes.libArcgis] },
      ]
    }
  ]

  constructor(public layoutManager: LayoutManager) {}
}
