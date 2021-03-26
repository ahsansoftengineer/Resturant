    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
      name: 'filter',
      pure: false
    })
    export class FilterPipe implements PipeTransform {

      transform(value: any, filter: string, propName: string): any {
        if(filter.length === 0 || filter === ''){
          return value
        }
        const resultArray = []
        for(const item of value){
          if(item[propName] === filter) {
            resultArray.push(item)
          }
        }
        return resultArray;
      }
    }
