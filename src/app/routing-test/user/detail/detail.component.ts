import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [],
})
export class DetailComponent implements OnInit {
  user: {id: number, name: string, userState: string};
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  queryParams: string;
  server_Id: number = 1;
  ngOnInit(): void {
    this.user = {
      id: 101, name: 'Ahsan', userState: 'Enabled'
    }
  }
  onEdit() {
    // Forwarding to Next Level of Directory
  }
}
