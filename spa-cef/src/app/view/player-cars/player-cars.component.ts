import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../service/vehicle.service';
import { VehicleModel } from '../../models/VehicleMode';
import { Router } from '@angular/router';


@Component({
  selector: 'app-player-cars',
  templateUrl: './player-cars.component.html',
  styleUrls: ['./player-cars.component.css']
})
export class PlayerCarsComponent implements OnInit {
  public playerVehicles: VehicleModel[];
  constructor(
    private _vehicle: VehicleService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._vehicle
    .getCharacterVehicles()
    .subscribe((vehs) =>{
      //console.log(vehs);
      this.playerVehicles = vehs;
    })
  }

  getDatails(vehId: number): void{

    this._router.navigate(["/playercars/more",vehId]);
  }

}
