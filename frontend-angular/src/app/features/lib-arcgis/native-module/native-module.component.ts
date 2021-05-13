import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

@Component({
  selector: 'app-lib-arcgis-native-module',
  templateUrl: './native-module.component.html',
  styleUrls: ['./native-module.component.scss']
})
export class NativeModuleComponent implements OnInit {

  @ViewChild('mapAnchor', { static: true }) private mapAnchor: ElementRef;

  private mapView!: MapView;
  private map!: Map;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = new Map({
      basemap: 'hybrid'
    });

    this.mapView = new MapView({
      container: this.mapAnchor.nativeElement,
      map: this.map,
      zoom: 13
    });
  }

  addFeatureLayer(): void {
    const trailheadsLayer = new FeatureLayer({
      url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0'
    });

    this.map.add(trailheadsLayer);
  }

}
