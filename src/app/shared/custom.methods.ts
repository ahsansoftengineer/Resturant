import { AbstractControl } from '@angular/forms';

export class CustomMethods {
  static duration: string;
  static computeDuration(
    oldDate: Date = new Date('February 26, 2021 11:21:00')
  ): string {
    const cd: Date = new Date(); // Current Date
    // Today
    if (oldDate.toDateString() === cd.toDateString()) {
      if (cd.getHours() === oldDate.getHours()) {
        if (cd.getMinutes() === oldDate.getMinutes()) {
          this.duration =
            cd.getSeconds() - oldDate.getSeconds() + ' Seconds ago';
        } else {
          this.duration =
            cd.getMinutes() - oldDate.getMinutes() + ' Minutes ago';
        }
      } else {
        this.duration = cd.getHours() - oldDate.getHours() + ' Hours ago';
      }
    }
    // Yesterday & Before Yesterday
    else if (oldDate.getFullYear() === cd.getFullYear() &&oldDate.getMonth() === cd.getMonth()) {
      // Yesterday
      if (cd.getDate() - 1 === oldDate.getDate()) {
        this.duration = ' Yesterday ' + oldDate.toTimeString().slice(0, 9);
      }
      // Too Old
      else {
        this.duration =oldDate.toDateString() + ' ' + oldDate.toTimeString().slice(0, 9);
      }
    }
    // Too Old
    else {
      this.duration = oldDate.toDateString() + ' ' + oldDate.toTimeString().slice(0, 9);
    }
    return this.duration;
  }
}
