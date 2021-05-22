import { Component } from '@angular/core';
import { MenuItem } from 'src/app/shared/modules/tabs-routing/tabs-routing.model';
import { ArcgisFeatureRoutes } from './lib-arcgis.contants';

@Component({
  selector: 'app-lib-arcgis',
  templateUrl: './lib-arcgis.component.html',
  styleUrls: ['./lib-arcgis.component.scss'],
})
export class LibArcgisComponent {
  public menuItems: MenuItem[] = [
    { route: ArcgisFeatureRoutes.loader, label: 'Loader module' },
    { route: ArcgisFeatureRoutes.native, label: 'Native module' },
  ];
}
