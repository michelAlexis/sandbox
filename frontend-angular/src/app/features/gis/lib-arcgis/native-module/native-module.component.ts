import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Map from '@arcgis/core/Map';
import Point from '@arcgis/core/geometry/Point';
import * as projection from '@arcgis/core/geometry/projection';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

import { DEFAULT_BASEMAP, DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM, FEATURE_LAYER } from '../lib-arcgis.contants';

@Component({
  selector: 'app-lib-arcgis-native-module',
  templateUrl: './native-module.component.html',
  styleUrls: ['./native-module.component.scss'],
})
export class NativeModuleComponent implements OnInit {
  @ViewChild('mapAnchor', { static: true }) private mapAnchor: ElementRef;

  private mapView!: MapView;
  private map!: Map;

  private center!: Point;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = new Map({
      basemap: DEFAULT_BASEMAP,
    });

    this.center = new Point(DEFAULT_MAP_CENTER);

    projection.load().then(() => {
      this.center = projection.project(this.center, {
        wkid: 102100,
      }) as Point;

      this.mapView = new MapView({
        container: this.mapAnchor.nativeElement,
        map: this.map,
        center: this.center,
        zoom: DEFAULT_MAP_ZOOM,
      });
    });
  }

  addFeatureLayer(): void {
    const trailheadsLayer = new FeatureLayer(FEATURE_LAYER);

    this.map.add(trailheadsLayer);
  }
}
