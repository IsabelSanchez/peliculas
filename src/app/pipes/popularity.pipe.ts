import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popularity'
})
export class PopularityPipe implements PipeTransform {

  transform(popularity: Number): any {
    return popularity.toFixed(1);
  }

}
