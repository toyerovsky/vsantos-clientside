import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { VehicleModel } from '../../../../models/VehicleMode';
import { VehicleService } from '../../../../service/vehicle.service';

@Component({
  selector: 'app-player-cars-more',
  templateUrl: './player-cars-more.component.html',
  styleUrls: ['./player-cars-more.component.css']
})
export class PlayerCarsMoreComponent implements OnInit {


  public veh: VehicleModel = new VehicleModel;
  constructor(
    private _notification: ToastrService,
    private _router: ActivatedRoute,
    private _vehicle: VehicleService
  ) { }

  ngOnInit() {
    this._router.params.subscribe((param) =>{
      this._vehicle.getVehicleById(param['id'])
      .subscribe((vehicle) =>{
        this.veh = vehicle;
      });

    });

  }


  spawnVehicle(): void{
    if(!this.veh.isSpawned){
      this._notification.success("Zespawnowałeś pojazd XXX","POJAZD");
    }
    else{
      this._notification.success("Odspawnowałeś pojazd XXX","POJAZD");
    }
    this.veh.isSpawned = !this.veh.isSpawned;
    //API : Save information about vehicle
    // RAGE : Spawn/Unspawn Vehicle
  }

  trackVehicle(): void{
    this._notification.info("Na mapie zlokalizowano twój pojazd","POJAZD");
  }

}
