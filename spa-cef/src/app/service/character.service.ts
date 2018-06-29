import { environment } from '../../environments/environment';

import { CharacterModel } from '../models/CharacterModel';
import { CharacterCreatorModel } from '../models/CharacterCreatorModel';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import AbstractService from './abstract.service';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CharacterService extends AbstractService {
    public characterCreatorModel: CharacterCreatorModel = new CharacterCreatorModel();
    public currentCharacterId: number;
    constructor(private _http: HttpClient) {
        super();
    }

    public selectCharacter(id: number): Observable<void> {
        return this._http.post<void>(`${environment.apiUrl}/api/character/select/`, id, { withCredentials: true })
            .pipe(
                catchError((error: any) => {
                  this.handleError('character.service selectCharacter()');

                    return Observable.throw(error);
                })

            );

    }

    public getByAccountId(): Observable<CharacterModel[]> {
        return this._http.get<CharacterModel[]>(`${environment.apiUrl}/api/character/account/`, { withCredentials: true })
            .pipe(
                catchError((error: any) => {
                 this.handleError('character.service getByAccountId()');

                    return Observable.throw(error);
                })
            );
    }

    public post(character: CharacterCreatorModel): Observable<CharacterCreatorModel> {
        return this._http.post<CharacterCreatorModel>(`${environment.apiUrl}/api/character`, character, { withCredentials: true })
            .pipe(

                catchError((error: any) => {
                  this.handleError('character.service post()');

                     return Observable.throw(error);
                 })
            );

    }
}
