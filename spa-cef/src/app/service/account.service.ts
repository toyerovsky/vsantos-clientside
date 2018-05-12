import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private _id: number;
    public get id(): number {
        return this._id;
    }

    private _http: HttpClient;

    /**
     *
     */
    constructor(http: HttpClient) {
        this._http = http;
    }

    public login(email: string, password: string): void {
        this._http.post<number>('api/account/login/', { email, password })
            .subscribe(login => this._id = login);
    }
}