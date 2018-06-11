import { Component, OnInit } from '@angular/core';
import { ISelectorElement } from '../../../../../components/selector/interfaces/ISelectorElement';

@Component({
  selector: 'app-character-creator-appearance',
  templateUrl: './character-creator-appearance.component.html',
  styleUrls: ['../../../character-creator.component.css']
})
export class CharacterCreatorAppearanceComponent implements OnInit {
  private _genderList: ISelectorElement[] = [
    {
      displayName: 'Mężczyzna'
    },
    {
      displayName: 'Kobieta'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
