import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kSafePipe'
})
export class KSafePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
