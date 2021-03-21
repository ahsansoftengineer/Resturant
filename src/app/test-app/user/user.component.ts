        import { Component } from '@angular/core';
        import { UserService } from '../user.service';

        @Component({
          selector: 'app-user',
          templateUrl: './user.component.html',
        })
        export class UserComponent{
          constructor(private userService: UserService) { }
          active: boolean = false
          activateUser(){
            this.active = !this.active
            // this.userService.activatedEmitter.emit(this.active);
            this.userService.activatedEmitter.next(this.active)
          }
        }
