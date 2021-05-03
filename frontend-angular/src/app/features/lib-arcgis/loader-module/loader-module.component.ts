import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-lib-arcgis-loader-module',
  templateUrl: './loader-module.component.html',
  styleUrls: ['./loader-module.component.scss']
})
export class LoaderModuleComponent implements OnInit {

  @ViewChild('mapAnchor', { static: true }) private mapAnchor!: ElementRef;

  private mapView!: any;
  private map!: any;

  constructor() {
  }

  ngOnInit(): void {
    loadModules([
      'esri/Map', 'esri/views/MapView'
    ]).then(([Map, MapView]) => {
      this.map = new Map({
        basemap: 'hybrid'
      });

      this.mapView = new MapView({
        container: this.mapAnchor.nativeElement,
        map: this.map,
        zoom: 13
      });
    });
  }

  async addFeatureLayer(): Promise<void> {
    const [FeatureLayer] = await loadModules(['esri/layers/FeatureLayer']);
    const trailheadsLayer = new FeatureLayer({
      url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0'
    });

    this.map.add(trailheadsLayer);
  }

}
