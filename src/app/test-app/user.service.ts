      import { EventEmitter, Injectable } from '@angular/core';
      import { Subject } from 'rxjs'

      @Injectable({
        providedIn: 'root'
      })
      export class UserService {
        // public activatedEmitter = new EventEmitter<boolean>();
        public activatedEmitter = new Subject();
      }
