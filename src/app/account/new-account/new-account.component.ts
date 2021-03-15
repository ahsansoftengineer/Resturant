import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styles: [],
})
export class NewAccountComponent {
  constructor(private accountService: AccountService) {
    this.accountService.statusUpdateEvent.subscribe((status: string) =>
      alert('Updated Status printed by Other Compoenent = !' + status)
    );
    console.log('Account Constructor Called');
  }
  onCreateAccount(name: string, status: string) {
    this.accountService.addAccount({ name: name, status: status });
  }
}
