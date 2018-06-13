import { Component, OnInit } from '@angular/core';
import 'leaflet';

@Component({
  selector: 'app-bus-stop',
  templateUrl: './bus-stop.component.html',
  styleUrls: ['./bus-stop.component.css']
})
export class BusStopComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  // tslint:disable
  ngAfterViewInit() {

    // initialize map in map div and set crs for game map
    const map = L.map('map',{
      crs: L.CRS.Simple
    });


    const mapUrl = 'https://cdn.rawgit.com/EpocDotFr/dec4a288249d1a3eaf30/raw/b7d5d6780066096b125991d14fb809fea2c94efc/gtav_svg_map.svg';
    const bounds = [
        [0,0],
        [1100, 860]
      ];

    const image = L.imageOverlay(mapUrl, bounds).addTo(map);
    map.fitBounds(bounds);
  }
}
