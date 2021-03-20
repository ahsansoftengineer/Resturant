import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: '../header/header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  dropdown:boolean = false;
  current: string = '';
  constructor() {}
}
