import './style.css';
import {Feature, Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import Overlay from 'ol/Overlay.js';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';



// Build map
const osmLayer = new TileLayer({source: new OSM()});

const map = new Map({
  target: 'map',
  layers: [osmLayer],
    
  view: new View({
    center: fromLonLat([-120.6608275, 35.300137]),
    zoom: 7
  })
});

const daniel_lonlat = fromLonLat([-122.338257, 47.6246778]);
const her_lonlat = fromLonLat([-117.138977, 32.760718]);
const my_lonlat = fromLonLat([-117.3525233, 33.9430753]);


const rivmarker = new Overlay({
  position: my_lonlat,
  positioning: 'center-center',
  element: document.getElementById('rivmarker'),
  stopEvent: false,
});
map.addOverlay(rivmarker);

const hermarker = new Overlay({
  position: her_lonlat,
  positioning: 'center-center',
  element: document.getElementById('hermarker'),
  stopEvent: false,
});
map.addOverlay(hermarker);

const danmarker = new Overlay({
  position: daniel_lonlat,
  positioning: 'center-center',
  element: document.getElementById('danmarker'),
  stopEvent: false,
});
map.addOverlay(danmarker);

