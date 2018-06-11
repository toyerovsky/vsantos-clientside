import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../service/character.service';
import { CharacterCreatorModel } from '../../models/CharacterCreatorModel';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.css']
})
export class CharacterCreatorComponent implements OnInit {
  private _freemodeCharacter: Boolean = false;

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this._characterService.characterCreatorModel = new CharacterCreatorModel();
  }
}
