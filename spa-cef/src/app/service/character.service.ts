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

    constructor(private _http: HttpClient) {
        super();
    }

    public getByAccountId(accountId: number): Observable<CharacterModel[]> {
        return this._http.get<CharacterModel[]>(`${environment.apiUrl}/api/character/account/${accountId}`)
            .pipe(
                catchError(this.handleError('character.service getByAccountId()'))
            );
    }

    public post(character: CharacterCreatorModel): Observable<CharacterCreatorModel> {
        this._http.post<CharacterCreatorModel>(`${environment.apiUrl}/api/character`, character);

    }
}