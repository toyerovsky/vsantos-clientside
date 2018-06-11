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
  @Output() public change: EventEmitter<ISelectorElement> = new EventEmitter();

  ngOnInit() {
    this._currentElement = this.elements[0].displayName || '';
  }

  next() {
    if (this.elements.length > this._currentIndex) {
      let element: ISelectorElement = this.elements[++this._currentIndex];
      this._currentElement = element.displayName;
      this.change.emit(element);
    }
  }

  prev() {
    if (this.elements.length > 0) {
      let element: ISelectorElement = this.elements[--this._currentIndex];
      this._currentElement = element.displayName;
      this.change.emit(element);
    }
  }
}
