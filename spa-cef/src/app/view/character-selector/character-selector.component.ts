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

  private _currentIndex: number = 0;
  private _characters: CharacterModel[];

  constructor(private _characterService: CharacterService) {}

  ngOnInit() {
    this._characterService
      .getByAccountId(AccountService.currentAccountId)
      .subscribe(characters => {
        this._characters = characters;
        this.character = this._characters[this._currentIndex];
      });
  }

  next() {
    if (this._characters.length - 1 < this._currentIndex)
      this.character = this._characters[++this._currentIndex];
  }

  prev() {
    if (this._currentIndex > 0)
      this.character = this._characters[--this._currentIndex];
  }

  select() {
    // @ts-ignore
    mp.trigger("characterSelectRequested", AccountService.currentAccountId, this._currentIndex);
  }
}
