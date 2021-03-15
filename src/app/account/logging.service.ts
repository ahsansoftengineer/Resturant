import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService{
  logStatusChange(accountStatus: string){
    console.log('Account Status Set as = ' + accountStatus);
  }
}
