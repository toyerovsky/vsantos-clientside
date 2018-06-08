import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-creator-routing',
  templateUrl: './character-creator-routing.component.html',
  styleUrls: ['../character-creator.component.css']
})
export class CharacterCreatorRoutingComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  private previousPage(){ this.location.back(); }
}
