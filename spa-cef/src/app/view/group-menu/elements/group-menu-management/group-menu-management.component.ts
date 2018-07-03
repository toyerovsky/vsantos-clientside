import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CharacterModel } from '../../../../models/CharacterModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-group-menu-management',
  templateUrl: './group-menu-management.component.html',
  styleUrls: ['./group-menu-management.component.css']
})
export class GroupMenuManagementComponent implements OnInit {
  public inputMoney: number;
  public player: CharacterModel;
  public groupMoney: number;
  constructor(
    private location: Location,
    private _notification: ToastrService
  ) { }

  ngOnInit() {
    //TEST
    this.player = new CharacterModel();
    this.player.money = 500;
    this.groupMoney = 1000;
  }

  private previousPage(){
    this.location.back();
  }

  payOff(): void{
    if(this.inputMoney === undefined){
      this._notification.error("Najpierw wprowadź wartość!","GRUPA");
    }
    if(this.inputMoney > this.groupMoney){
      this._notification.info("Nie ma tylu pieniędzy na koncie grupy!","GRUPA");
    }
    else{
      this.groupMoney  -= this.inputMoney;
      // Add money to Player
      this.player.money += this.inputMoney;
      // API: bank money substract
      this._notification.success(`Wypłacono $${this.inputMoney} z konta grupowego.`,"GRUPA");
    }

  }

  payIn(): void{
    if(this.inputMoney === undefined){
      this._notification.error("Najpierw wprowadź wartość!","GRUPA");
    }
    if(this.inputMoney > this.player.money){
      this._notification.info("Nie masz tylu pieniędzy przy sobie!","GRUPA");
    }
    else{
      this.groupMoney  += this.inputMoney;
      // Substract money from Player
      this.player.money -= this.inputMoney;
      // API: bank money substract
      this._notification.success(`Wpłacono $${this.inputMoney} na konto grupowe.`,"GRUPA");
    }

  }
}
