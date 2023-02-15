import { Component, OnInit } from '@angular/core';
declare var priceCalculate: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    new priceCalculate();
  }
  title = 'Joele Mattia portfolio';
}
