import { CharacterModel } from '../models/CharacterModel';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CharacterService {
    private _http: HttpClient;

    constructor(http: HttpClient) {
        this._http = http;
    }

    public getByAccountId(accountId: number): Observable<CharacterModel[]> {
        return this._http.get<CharacterModel[]>(`api/character/account/${accountId}`);
    }
}