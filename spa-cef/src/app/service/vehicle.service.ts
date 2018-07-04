import { Injectable } from '@angular/core';
import AbstractService from './abstract.service';
import { VehicleModel } from '../models/VehicleMode';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService extends AbstractService {
public vehicleModel = new VehicleModel;
  constructor(private _http: HttpClient) {
    super();
  }

  public getCharacterVehicles(): Observable<VehicleModel[]>{
    return this._http.get<VehicleModel[]>(`${environment.apiUrl}/api/vehicle/charactervehicles`,{withCredentials: true})
      .pipe(
        catchError((error: any)=>{
            this.handleError('vehicle.service getCharacterVehicles() ');
            return throwError(error);
        })
      );
  }

  public getVehicleById(vehId: number): Observable<VehicleModel>{
    return this._http.get<VehicleModel>(`${environment.apiUrl}/api/vehicle/${vehId}`,{withCredentials: true})
      .pipe(
        catchError((error: any)=>{
          this.handleError('vehicle.service getVehicleById()');
          return throwError(error);
        })
      );
  }

}
