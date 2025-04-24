import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipe implements PipeTransform {
  transform(value: string): string {
    return `${value.replace(',', '.')} руб.`;
  }
}
