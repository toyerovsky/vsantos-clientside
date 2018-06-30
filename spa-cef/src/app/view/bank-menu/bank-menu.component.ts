import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-bank-menu',
  templateUrl: './bank-menu.component.html',
  styleUrls: ['./bank-menu.component.css']
})
export class BankMenuComponent implements OnInit {

  private _accountBalance: number;
  public get accountBalance(): number{
    return this._accountBalance;
  }
  public set accountBalance(n: number){
    this._accountBalance = n;
  }
  constructor(private _characterService: CharacterService) { }

  ngOnInit() {

  }

}
