import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: '../header/header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  @Output()
  currentPage = new EventEmitter<string>();
  dropdown:boolean = false;
  current: string = 'savedata';
  constructor() {}
  onSelect(component: string) {
    this.currentPage.emit(component);
  }
}
