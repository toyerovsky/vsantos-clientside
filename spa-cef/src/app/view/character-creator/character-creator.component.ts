import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../service/character.service';
import { SimpleSelectorElement } from '../../components/selector/classes/SimpleSelectorElement';
import { JsonService } from '../../service/json.service';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.css']
})
export class CharacterCreatorComponent implements OnInit {
  private _freemodeCharacter: Boolean = false;
  private _skins: SimpleSelectorElement[];

  constructor(
    private _characterService: CharacterService,
    private _jsonService: JsonService) {
  }

  saveCharacter() {
    this._characterService.characterCreatorModel.isAlive = true;
    this._characterService.characterCreatorModel.createTime = new Date();
    this._characterService.post(this._characterService.characterCreatorModel).subscribe();
  }

  ngOnInit() {
    this._jsonService
      .getSkins()
      .subscribe(data => {
        this._skins = data;
      });
  }

  setSkin(event: SimpleSelectorElement) {
    this._characterService.characterCreatorModel.model = event.displayName;
  }
}
