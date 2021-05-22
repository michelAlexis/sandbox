import { CommonModule } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(n: number): number[] {
    const array: number[] = new Array(n);
    for(let i = 0; i < n; i++) {
      array[i] = i;
    }
    return array;
  }

}

@NgModule({
  imports: [CommonModule],
  declarations: [RangePipe],
  exports: [RangePipe]
})
export class RangePipeModule {}