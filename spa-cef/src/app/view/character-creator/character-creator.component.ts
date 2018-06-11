import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../service/character.service';
import { CharacterCreatorModel } from '../../models/CharacterCreatorModel';
import { SimpleSelectorElement } from '../../components/selector/classes/SimpleSelectorElement';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.css']
})
export class CharacterCreatorComponent implements OnInit {
  private _freemodeCharacter: Boolean = false;
  // @ts-ignore
  private _skins: SimpleSelectorElement[] = require('../../../assets/json/skins.json');

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
  }
}
