import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';

import { Observable, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private _id: number;
    public get id(): number {
        return this._id;
    }

    private _http: HttpClient;

    constructor(http: HttpClient) {
        this._http = http;
    }

    public login(email: string, password: string): Observable<number> {
        let observable = this._http.post<number>(`${environment.apiUrl}/api/account/login/`, { email, password });
        observable.subscribe(id => this._id = id);
        return observable;
    }
}