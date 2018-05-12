import { environment } from '../../environments/environment';

import { CharacterModel } from '../models/CharacterModel';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CharacterService {

    constructor(private _http: HttpClient) { }

    public getByAccountId(accountId: number): Observable<CharacterModel[]> {
        return this._http.get<CharacterModel[]>(`${environment.apiUrl}/api/character/account/${accountId}`);
    }
}