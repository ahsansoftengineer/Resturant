    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({ name: 'shorten' })
    export class ShortenPipe implements PipeTransform {
      transform(value: string, start: number, end: number): string {
        if (value.length > end) {
          return value.substr(start, end) + '...';
        } else {
          return value;
        }
      }
    }
