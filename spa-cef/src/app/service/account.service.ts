import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import AbstractService from './abstract.service';

@Injectable({ providedIn: 'root' })
export class AccountService extends AbstractService {

    constructor(private _http: HttpClient) {
        super();
    }

    public login(email: string, password: string): Observable<any> {
        return this._http.post<any>(`${environment.apiUrl}/api/account/login/`, { email, password })
            .pipe(
                catchError(this.handleError('account.service login()'))
            );
    }
}
