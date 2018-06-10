import { Location } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-group-menu-about',
  templateUrl: './group-menu-about.component.html'
})
export class GroupMenuAboutComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  private previousPage(){
    this.location.back();
  }
}
