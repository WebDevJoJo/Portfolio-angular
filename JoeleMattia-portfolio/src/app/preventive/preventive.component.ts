import { Component } from '@angular/core';
@Component({
  selector: 'app-preventive',
  templateUrl: './preventive.component.html',
  styleUrls: ['./preventive.component.scss'],
  template: `<button
    type="button"
    (click)="priceCalculate()"
    class="btn btn-outline-light"
  >
    Calculate
  </button> `,
})
export class PreventiveComponent {
  priceCalculate() {
    new priceCalculate();
  }
}
