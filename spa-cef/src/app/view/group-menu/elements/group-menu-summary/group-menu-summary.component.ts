import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-group-menu-summary',
  templateUrl: './group-menu-summary.component.html'
})
export class GroupMenuSummaryComponent implements OnInit {
  public isOnDuty: boolean;
  constructor(
    private _notification: ToastrService
  ) { }

  ngOnInit() {
    //TEST
    this.isOnDuty = false;
  }

  duty(){
    if(!this.isOnDuty){
      this._notification.info("Wszedłeś właśnie na służbe!","Grupa");
    }
    else{
      this._notification.info("Zszedłeś właśnie ze służby!","Grupa");
    }
    this.isOnDuty = !this.isOnDuty;

  }




}
