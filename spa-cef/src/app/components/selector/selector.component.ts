import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ISelectorElement } from './interfaces/ISelectorElement';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  private _currentElement: string;
  private _currentIndex: number;

  @Input() public elements: ISelectorElement[];
  // @Output() change: EventEmitter<ISelectorElement> = new EventEmitter();

  ngOnInit() {
    alert(JSON.stringify(this.elements))
    this._currentElement = this.elements[0].displayName || '';
  }

  next() {
    if (this.elements.length > this._currentIndex)
      this._currentElement = this.elements[this._currentIndex++].displayName;
  }

  prev() {
    if (this.elements.length > 0)
      this._currentElement = this.elements[this._currentIndex--].displayName;
  }
}
