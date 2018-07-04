import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { ItemModel } from '../../models/ItemModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-items',
  templateUrl: './player-items.component.html',
  styleUrls: ['./player-items.component.css']
})
export class PlayerItemsComponent implements OnInit {
  public playerItems: ItemModel[];
  constructor(
    private _item: ItemService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._item.getItemsByCharacterId()
    .subscribe((items)=>{
      console.log(items);
      this.playerItems = items;
    });
  }

  getItemDetails(itemId: number): void{
    this._router.navigate(["/playeritems/info/",itemId]);
  }

}
