import { CharacterModel } from '../models/CharacterModel';

import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent implements OnInit {
  public character: CharacterModel;

  private _currentIndex: number = 0;
  private _characters: CharacterModel[];

  constructor(
    private _characterService: CharacterService
  ) {
  }

  ngOnInit() {
    this._characterService.getByAccountId(AccountService.currentAccountId)
      .subscribe((characters => {
        this._characters = characters;
        this.character = this._characters[this._currentIndex];
      }));
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
    var mp: any;
    mp.trigger('characterSelectRequested', this._currentIndex);
  }
}
