import { LoginModel } from '../models/LoginModel';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';

import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _loginModel: LoginModel = new LoginModel();
  public get loginModel(): LoginModel {
    return this._loginModel;
  }
  public set loginModel(v: LoginModel) {
    this._loginModel = v;
  }

  constructor(
    private _accountService: AccountService,
    private _router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this._accountService.login(this.loginModel.email, this.loginModel.password)
      .subscribe(data => {
        AccountService.currentAccountGuid = data.userGuid;
        AccountService.currentAccountId = data.accountId;
        this._router.navigate(['characterselect']);
      });
  }
}
