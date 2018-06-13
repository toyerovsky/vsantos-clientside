import { Component, OnInit } from '@angular/core';

import { CharacterModel } from './../../models/CharacterModel';
import { AccountService } from './../../service/account.service';
import { CharacterService } from './../../service/character.service';

@Component({
  selector: "app-character-selector",
  templateUrl: "./character-selector.component.html",
  styleUrls: ["./character-selector.component.css"]
})
export class CharacterSelectorComponent implements OnInit {
  public character: CharacterModel;
  public characters: CharacterModel[];

  private _currentIndex: number = 0;

  constructor(
    private _characterService: CharacterService,
    private _accountService: AccountService) {
  }

  ngOnInit() {
    this._characterService
      .getByAccountId(this._accountService.currentAccountId)
      .subscribe(characters => {
        alert(JSON.stringify(characters))
        this.characters = characters;
        this.character = characters[0];
        
      });
  }

  clickHandler(character: CharacterModel) {
    this.character = character;
  }

  select() {
    // @ts-ignore
    mp.trigger("characterSelectRequested", this._accountService.currentAccountId, this.characters.indexOf(this.character));
  }
}
