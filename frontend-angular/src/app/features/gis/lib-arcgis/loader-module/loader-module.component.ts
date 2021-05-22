import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { loadModules } from 'esri-loader';
import { DEFAULT_BASEMAP, DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM, FEATURE_LAYER } from '../lib-arcgis.contants';
import esri = __esri;

@Component({
  selector: 'app-lib-arcgis-loader-module',
  templateUrl: './loader-module.component.html',
  styleUrls: ['./loader-module.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderModuleComponent implements OnInit {
  @ViewChild('mapAnchor', { static: true }) private mapAnchor!: ElementRef;
  @ViewChild('searchAnchor', { static: true })
  private searchAnchor!: ElementRef;
  @ViewChild('layerListAnchor', { static: false })
  private layerListAnchor!: ElementRef;

  private mapView!: esri.MapView;
  private map!: esri.Map;

  private baseampGallery: esri.BasemapGallery;
  private search: esri.widgetsSearch;
  private layerList: esri.LayerList;

  private center!: esri.Point;

  public showLayerList = false;

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    const [Map, MapView, Point, projection] = await loadModules<
      [esri.MapConstructor, esri.MapViewConstructor, esri.PointConstructor, esri.projection]
    >(['esri/Map', 'esri/views/MapView', 'esri/geometry/Point', 'esri/geometry/projection']);

    this.map = new Map({
      basemap: DEFAULT_BASEMAP,
    });

    this.center = new Point(DEFAULT_MAP_CENTER);

    await projection.load();
    this.center = projection.project(this.center, {
      wkid: 102100,
    }) as esri.Point;

    this.mapView = new MapView({
      container: this.mapAnchor.nativeElement,
      map: this.map,
      center: this.center,
      zoom: DEFAULT_MAP_ZOOM,
    });
  }

  public async addFeatureLayer(): Promise<void> {
    const [FeatureLayer] = await loadModules<[esri.FeatureLayerConstructor]>(['esri/layers/FeatureLayer']);
    const trailheadsLayer = new FeatureLayer(FEATURE_LAYER);

    this.map.add(trailheadsLayer);
  }

  public moveToCenter(): void {
    this.mapView.goTo({
      center: this.center,
      zoom: 8,
    });
  }

  public async toggleBasemapGallery(): Promise<void> {
    if (!this.baseampGallery) {
      const [BasemapGallery] = await loadModules<[esri.BasemapGalleryConstructor]>(['esri/widgets/BasemapGallery']);

      this.baseampGallery = new BasemapGallery({
        view: this.mapView,
      });

      this.mapView.ui.add(this.baseampGallery, {
        position: 'top-right',
      });
    } else {
      this.baseampGallery.destroy();
      this.baseampGallery = null;
    }
  }

  public async toggleSearch(): Promise<void> {
    if (!this.search) {
      const [Search] = await loadModules<[esri.widgetsSearchConstructor]>(['esri/widgets/Search']);

      const container = document.createElement('div');
      container.className = 'full';

      this.searchAnchor.nativeElement.append(container);
      this.search = new Search({
        view: this.mapView,
        container: container,
      });
    } else {
      // Destroy method will remove the anchor from de DOM.
      // If we give the "searchAnchor" to the widget, it cannot be used the second time.
      this.search.destroy();
      this.search = null;
    }
  }

  public async toggleLayerList(): Promise<void> {
    if (!this.layerList) {
      this.showLayerList = true;
      this.cdr.detectChanges();
      const [LayerList] = await loadModules<[esri.LayerListConstructor]>(['esri/widgets/LayerList']);

      const container = document.createElement('div');
      container.className = 'full';

      this.layerListAnchor.nativeElement.append(container);
      this.layerList = new LayerList({
        view: this.mapView,
        container: container,
      });
    } else {
      this.layerList.destroy();
      this.layerList = null;
      this.showLayerList = false;
    }
  }
}
