import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ISelectorElement } from './interfaces/ISelectorElement';
import { Key } from 'selenium-webdriver';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  private _currentElement: string;
  private _currentIndex: number = 0;

  @Input() public elements: ISelectorElement[];
  @Output() public change: EventEmitter<ISelectorElement> = new EventEmitter();

  ngOnInit() {
    let element = this.elements[this._currentIndex].displayName;
    this._currentElement = element || '';
  }

  next() {
    this._currentIndex++;
    this._currentIndex = this._currentIndex % this.elements.length;
    let element = this.elements[this._currentIndex];
    this._currentElement = element.displayName;
    this.change.emit(element);
  }

  prev() {
    this._currentIndex--;
    this._currentIndex = this._currentIndex % this.elements.length;
    let element = this.elements[Math.abs(this._currentIndex)];
    this._currentElement = element.displayName;
    this.change.emit(element);
  }
}
