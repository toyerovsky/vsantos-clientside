import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../service/character.service';
import { BankAccountModel } from '../../models/BankAccountModel';
import { ToastrService } from 'ngx-toastr';
import { CharacterModel } from '../../models/CharacterModel';

@Component({
  selector: 'app-bank-menu',
  templateUrl: './bank-menu.component.html',
  styleUrls: ['./bank-menu.component.css']
})
export class BankMenuComponent implements OnInit {

  public  inputMoney: number;
  public  player: CharacterModel = new CharacterModel;

  constructor(
    private _characterService: CharacterService,
    private _notification: ToastrService
  ) { }

  ngOnInit() {


    this._characterService
    .getSelectedCharacter()
    .subscribe((ch)=>{
      console.log(ch);
      this.player = ch;
    });

  }

  payOff(): void{
    if(this.inputMoney === undefined){
      this._notification.error("Najpierw wprowadź wartość!","BANK");
    }
    if(this.inputMoney > this.player.bankMoney){
      this._notification.info("Nie masz tylu pieniędzy na koncie!","BANK");
    }
    else{
      this.player.bankMoney  -= this.inputMoney;
      // Add money to Player
      this.player.money += this.inputMoney;
      // API: bank money substract
      this._notification.success(`Wypłacono $${this.inputMoney} z konta bankowego.`,"BANK");
    }

  }

  payIn(): void{
    if(this.inputMoney === undefined){
      this._notification.error("Najpierw wprowadź wartość!","BANK");
    }
    if(this.inputMoney > this.player.money){
      this._notification.info("Nie masz tylu pieniędzy przy sobie!","BANK");
    }
    else{
      this.player.bankMoney  += this.inputMoney;
      // Substract money from Player
      this.player.money -= this.inputMoney;
      // API: bank money substract
      this._notification.success(`Wpłacono $${this.inputMoney} na konto bankowe.`,"BANK");
    }

  }



}
