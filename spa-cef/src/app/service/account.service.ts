import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import AbstractService from './abstract.service';

@Injectable({ providedIn: 'root' })
export class AccountService extends AbstractService {
    public currentAccountGuid: string;
    public currentAccountId: number;

    constructor(private _http: HttpClient) {
        super();
    }

    public login(email: string, password: string): Observable<{ userGuid: string, accountId: number }> {
        return this._http.post<{ userGuid: string, accountId: number }>(`${environment.apiUrl}/api/account/login/`, { email, password })
            .pipe(
                catchError(this.handleError('account.service login()'))
            );
    }
}