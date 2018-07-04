import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ItemModel } from '../models/ItemModel';
import { environment } from '../../environments/environment.prod';
import { catchError } from 'rxjs/operators';
import AbstractService from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService extends AbstractService {

  constructor(
    private _http: HttpClient
  )
  {
    super();
  }


  public getItemsByCharacterId(): Observable<ItemModel[]>{
    return this._http.get<ItemModel[]>(`${environment.apiUrl}/api/item/characteritems`,{withCredentials: true})
      .pipe(
        catchError((error: any) =>{
          this.handleError("item.service getItemsByCharacterId() ");
          return throwError(error);
        })
      );
  }

  public getItemById(itemId: number): Observable<ItemModel>{
    return this._http.get<ItemModel>(`${environment.apiUrl}/api/item/${itemId}`,{withCredentials: true})
      .pipe(
        catchError((error: any)=>{
          this.handleError("item.service getItemById()");
          return throwError(error);
        })
      );
  }

}
