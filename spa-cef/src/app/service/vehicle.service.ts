import { Injectable } from '@angular/core';
import AbstractService from './abstract.service';
import { VehicleModel } from '../models/VehicleMode';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService extends AbstractService {
public vehicleModel = new VehicleModel;
  constructor(private _http: HttpClient) {
    super();
  }

  public getByCharacterId(characterId: number): Observable<VehicleModel[]> {
    //return this._http.get;
  }
}
