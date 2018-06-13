import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import AbstractService from './abstract.service';
import { catchError } from 'rxjs/operators';
import { httpOptions } from './options';
import { AccountService } from './account.service';
import { SimpleSelectorElement } from '../components/selector/classes/SimpleSelectorElement';

@Injectable({ providedIn: 'root' })
export class JsonService extends AbstractService {
    constructor(private _http: HttpClient) {
        super();
    }

    public getSkins(): Observable<SimpleSelectorElement[]> {
        return this._http.get<SimpleSelectorElement[]>('./assets/json/skins.json');
    }
}