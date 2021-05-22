import esri = __esri;

export enum ArcgisFeatureRoutes {
  loader = 'loader',
  native = 'native',
}

export const LAMBERT_72: esri.SpatialReferenceProperties = {
  wkid: 31370,
};

export const DEFAULT_MAP_CENTER: esri.PointProperties = {
  x: 184836,
  y: 130652,
  spatialReference: LAMBERT_72,
};

export const DEFAULT_MAP_ZOOM = 8;

export const DEFAULT_BASEMAP: string | esri.BasemapProperties = 'dark-gray';

export const FEATURE_LAYER: esri.FeatureLayerProperties = {
  url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0',
};
