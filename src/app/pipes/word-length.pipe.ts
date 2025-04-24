import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordLength'
})
export class WordLengthPipe implements PipeTransform {

  transform(value: string,): string {
    return value.length <= 95 ? value : value.slice(0, 95) + '...';
  }

}
