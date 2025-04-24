import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string): string {
    // return `+${value[0]}${value[1]}${value[2]}(${value[3]}${value[4]})${value[5]}${value[6]}${value[7]}-${value[8]}${value[9]}-${value[10]}${value[11]}`;
    return value.replace(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/, '+$1($2)$3-$4-$5');
  }
}
