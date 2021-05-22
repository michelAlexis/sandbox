import { Component } from '@angular/core';
import { MenuItem } from 'src/app/models/layout.model';
import { ArcgisFeatureRoutes } from './lib-arcgis.contants';

@Component({
  selector: 'app-lib-arcgis',
  templateUrl: './lib-arcgis.component.html',
  styleUrls: ['./lib-arcgis.component.scss'],
})
export class LibArcgisComponent {
  public menuItems: MenuItem[] = [
    { routerLink: ArcgisFeatureRoutes.loader, label: 'Loader module' },
    { routerLink: ArcgisFeatureRoutes.native, label: 'Native module' },
  ];
}
