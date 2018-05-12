import { LoginModel } from '../models/LoginModel';

import { Component, OnInit } from '@angular/core';

import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _login: LoginModel;
  private _accountService: AccountService;

  constructor(accountService: AccountService) {
    this._accountService = accountService;
  }

  ngOnInit() {
  }

  login() {
    this._accountService.login(this._login.email, this._login.password);
  }
}
