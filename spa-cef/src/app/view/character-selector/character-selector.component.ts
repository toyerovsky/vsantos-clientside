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

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this._characterService
      .getByAccountId(AccountService.currentAccountId)
      .subscribe(characters => {
        this.characters = characters;

        if (this.characters.length <= 0) {
          // notify player about no characters on his account
          return;
        }

        this.character = characters[0];
      });
  }

  clickHandler(character: CharacterModel) {
    this.character = character;
  }

  select() {
    // @ts-ignore
    mp.trigger("characterSelectRequested", AccountService.currentAccountId, this.characters.indexOf(this.character));
  }
}
