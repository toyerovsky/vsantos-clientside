import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-player-cars-more',
  templateUrl: './player-cars-more.component.html',
  styleUrls: ['./player-cars-more.component.css']
})
export class PlayerCarsMoreComponent implements OnInit {

  public isSpawned: boolean;
  constructor(
    private _notification: ToastrService
  ) { }

  ngOnInit() {
    //TEST
    this.isSpawned = false;
  }


  spawnVehicle(): void{
    if(!this.isSpawned){
      this._notification.success("Zespawnowałeś pojazd XXX","POJAZD");
    }
    else{
      this._notification.success("Odspawnowałeś pojazd XXX","POJAZD");
    }
    this.isSpawned = !this.isSpawned;
    //API : Save information about vehicle
    // RAGE : Spawn/Unspawn Vehicle
  }

  trackVehicle(): void{
    this._notification.info("Na mapie zlokalizowano twój pojazd","POJAZD");
  }

}
