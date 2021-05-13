import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { loadModules } from 'esri-loader';
import esri = __esri;

@Component({
  selector: 'app-lib-arcgis-loader-module',
  templateUrl: './loader-module.component.html',
  styleUrls: ['./loader-module.component.scss']
})
export class LoaderModuleComponent implements OnInit {

  private static readonly LAMBERT_72: esri.SpatialReferenceProperties = {
    wkid: 31370
  }

  @ViewChild('mapAnchor', { static: true }) private mapAnchor!: ElementRef;

  private mapView!: esri.MapView;
  private map!: esri.Map;

  private center!: esri.Point;

  constructor() {
  }

  async ngOnInit(): Promise<void> {
    const [Map, MapView, Point, projection] = await loadModules<[esri.MapConstructor, esri.MapViewConstructor, esri.PointConstructor, esri.projection]>([
      'esri/Map',
      'esri/views/MapView',
      'esri/geometry/Point',
      'esri/geometry/projection'
    ])

    this.map = new Map({
      basemap: 'dark-gray',
    });

    this.center = new Point({
      x: 184836,
      y: 130652,
      spatialReference: LoaderModuleComponent.LAMBERT_72
    });

    await projection.load();
    this.center = projection.project(this.center, { wkid: 102100 }) as esri.Point;

    this.mapView = new MapView({
      container: this.mapAnchor.nativeElement,
      map: this.map,
      center: this.center,
      zoom: 8
    });
  }

  public async addFeatureLayer(): Promise<void> {
    const [FeatureLayer] = await loadModules<[esri.FeatureLayerConstructor]>(['esri/layers/FeatureLayer']);
    const trailheadsLayer = new FeatureLayer({
      url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0'
    });

    this.map.add(trailheadsLayer);
  }

  public moveToCenter(): void {
    this.mapView.goTo({
      center: this.center,
      zoom: 8
    });
  }

}
