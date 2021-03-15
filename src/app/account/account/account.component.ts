      import { Component, Input } from '@angular/core';
      import { AccountService } from '../account.service';

      @Component({
        selector: 'app-account',
        templateUrl: './account.component.html',
        styles: [],
      })
      export class AccountComponent {
        @Input()
        account: { name: string; status: string };
        @Input()
        id: number;
        constructor(private accountService: AccountService) {}
        ngOnInit(): void {}
        onSetTo(status: string) {
          this.accountService.updateAccount(this.id, status);
          this.accountService.statusUpdateEvent.emit(status);
        }
      }
