import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginModel } from './../../models/LoginModel';
import { AccountService } from './../../service/account.service';

@Component({
  selector: "app-login-panel",
  templateUrl: "./login-panel.component.html",
  styleUrls: ["./login-panel.component.css"]
})
export class LoginPanelComponent implements OnInit {

  private _loginModel: LoginModel = new LoginModel();
  public get loginModel(): LoginModel {
    return this._loginModel;
  }
  public set loginModel(v: LoginModel) {
    this._loginModel = v;
  }

  constructor(
    private _accountService: AccountService,
    private _router: Router
  ) {}

  ngOnInit() {}

  login() {
    this._accountService
      .login(this.loginModel.email, this.loginModel.password)
      .subscribe(data => {
        alert(data);
        AccountService.currentAccountGuid = data.userGuid;
        AccountService.currentAccountId = data.accountId;
        this._router.navigate(["characterselector"]);
      });
  }
}
