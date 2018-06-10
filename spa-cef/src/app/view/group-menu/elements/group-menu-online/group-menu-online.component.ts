import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-menu-online',
  templateUrl: './group-menu-online.component.html',
  styleUrls: ['./group-menu-online.component.css']
})
export class GroupMenuOnlineComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  private previousPage(){
    this.location.back();
  }

}
