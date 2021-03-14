import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styles: [],
})
export class DirectiveExampleComponent implements OnInit {
  customStructualDirective: boolean = false;
  num: number = 2;
  constructor() {}
  ngOnInit(): void {}
}
