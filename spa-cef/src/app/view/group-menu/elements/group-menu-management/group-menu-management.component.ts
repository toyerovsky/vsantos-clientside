import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-menu-management',
  templateUrl: './group-menu-management.component.html',
  styleUrls: ['./group-menu-management.component.css']
})
export class GroupMenuManagementComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  private previousPage(){
    this.location.back();
  }
}
