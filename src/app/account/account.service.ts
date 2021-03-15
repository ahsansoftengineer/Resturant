    import { EventEmitter, Injectable } from "@angular/core";
    import { LoggingService } from "./logging.service";

    // Due to Logging Service we are using @Injectable
    @Injectable()
    export class AccountService {
      constructor(private loggingService: LoggingService){}
      // Acount Methods
      accounts = [
        { name: 'Master Account', status: 'active', },
        { name: 'Test Account', status: 'inactive', },
        { name: 'Hidden Account', status: 'unknown', },
      ];
      statusUpdateEvent = new EventEmitter<string>();
      addAccount(account: { name: string; status: string }) {
        this.accounts.push(account);
        this.loggingService.logStatusChange(status)
        // this.statusUpdateEvent.emit(account.status)
      }
      updateAccount(id: number, status: string ) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status)
        // this.statusUpdateEvent.emit(account.status)
      }
    }
