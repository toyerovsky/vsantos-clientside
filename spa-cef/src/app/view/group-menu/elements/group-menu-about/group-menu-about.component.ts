import { Location } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-group-menu-about',
  templateUrl: './group-menu-about.component.html'
})
export class GroupMenuAboutComponent implements OnInit {

  constructor(
    private location: Location,
    private _notification: ToastrService
  ) { }

  ngOnInit() {
  }

  private previousPage(){
    this.location.back();
  }

  kickEmployee(): void{
    //Check player permission in group
    this._notification.info("Pomyślnie wyrzucono gracza XXX z grupy","GRUPA");
  }
}
