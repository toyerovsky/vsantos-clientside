import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginModel } from './../../models/LoginModel';
import { AccountService } from './../../service/account.service';
import { ToastrService } from 'ngx-toastr';


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
    private _router: Router,
    private _notification: ToastrService
  ) { }

  ngOnInit() {
  }

  login() {
    if(!this.loginModel.email){
      setTimeout(() => this._notification.error('Wpisz email!'));
    }
    if(!this.loginModel.password){
      setTimeout(() => this._notification.error('Wpisz hasło!'));
    }
    if(this.loginModel.email && this.loginModel.password){
      this._accountService
      .login(this.loginModel.email, this.loginModel.password)
      .subscribe(data => {
        console.log(data);
        if (data === undefined || data === null) {
          setTimeout(() => this._notification.error('Podane dane logowania są niepoprawne.'));
        } else {
          this._router.navigate(["characterselector"]);
          setTimeout(() => this._notification.success(`Logowanie pomyślne.`));
          // @ts-ignore
          mp.trigger("playerLoginRequested", AccountService.currentAccountGuid);
        }
      });
    }

  }
}
