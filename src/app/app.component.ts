import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturePipe } from './temperature.pipe';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DatePipe, DecimalPipe, TemperaturePipe, SortPipe],
})
export class AppComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  // historicTemperatures = [
  //   25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  // ];

  historicTemperatures = [
    { id: 1, temperature: 25 },
    { id: 2, temperature: 10 },
    { id: 3, temperature: 30 },
  ];

  // when click, set the temp to 18
  // why it broke with sort pipe?
  // for arrays, Angular checks the array reference, not whether individual elements have changed.
  onReset(id: number) {
    this.historicTemperatures = this.historicTemperatures.map((item) =>
      item.id === id ? { ...item, temperature: 18 } : item,
    );
  }
}
