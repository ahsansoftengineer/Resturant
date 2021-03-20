import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styles: [
  ]
})
export class TestAppComponent implements OnInit {
  showHide: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  showHideHome(){
    this.showHide = !this.showHide
  }
}
