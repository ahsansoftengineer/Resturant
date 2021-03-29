import { Component, OnInit} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: '../header/header.component.html',
  styleUrls: [],
})
export class HeaderComponent implements OnInit {
  dropdown:boolean = false;
  current: string = '';
  constructor(private dataStorageService: DataStorageService) {}
  onSaveData(){
    this.current = 'savedata'
    this.dropdown = !this.dropdown
    this.dataStorageService.storeRecipes()
  }
  onFetchData(){
    this.current = 'fetchdata'
    this.dropdown = false
    this.dataStorageService.fetchRecipes();
  }
  ngOnInit(): void {
    this.dataStorageService.fetchRecipes().subscribe();

  }
}
