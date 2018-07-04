import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../../service/item.service';
import { ActivatedRoute } from '@angular/router';
import { ItemModel } from '../../../../models/ItemModel';

@Component({
  selector: 'app-player-items-info',
  templateUrl: './player-items-info.component.html',
  styleUrls: ['./player-items-info.component.css']
})
export class PlayerItemsInfoComponent implements OnInit {
  public item: ItemModel = new ItemModel;
  public isUsed: boolean;
  constructor(
    private _item: ItemService,
    private _router: ActivatedRoute
  ) { }

  ngOnInit() {
    this._router.params.subscribe((param) =>{
      this._item.getItemById(param['id'])
      .subscribe((item)=>{
        this.item = item;
        console.log(item);
      });
    }

    );
  }

}
