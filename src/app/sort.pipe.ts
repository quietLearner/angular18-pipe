import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: true, //default
})
export class SortPipe implements PipeTransform {
  transform(
    value: { id: number; temperature: number }[],
    direction: 'asc' | 'desc' = 'asc',
  ) {
    return [...value].sort((a, b) =>
      direction === 'asc'
        ? a.temperature - b.temperature
        : b.temperature - a.temperature,
    );
  }
}
