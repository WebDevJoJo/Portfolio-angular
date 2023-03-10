import { Component, ElementRef, Input } from '@angular/core';
@Component({
  selector: 'app-preventive',
  templateUrl: './preventive.component.html',
  styleUrls: ['./preventive.component.scss'],
})
export class PreventiveComponent {
  clicked: boolean = false;
  tmparray: number[] = [];
  urlModel: boolean = true;
  fullname: any;
  email: any;
  productType: any = '50';
  manteinance: any = '0';
  showthis: boolean = false;
  date: any;
  urlToCalc: any = 50;
  result: number = 0;
  urlgroup: string[] = ['www.pippo.it', 'wwww.lol.it', 'www.xd.com'];
  checkThisURL: string = '';
  priceCalculate() {
    if (this.email && this.fullname && this.date) {
      this.clicked = true;
      if (this.urlToCalc != 50) {
        this.urlToCalc = 0;
      }
      this.tmparray.push(
        parseInt(this.productType),
        parseInt(this.urlToCalc),
        parseInt(this.manteinance)
      );
      this.result = this.tmparray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      this.tmparray = [];
    } else {
      alert('nooooh');
    }
  }
  eshopMethods() {
    this.showthis = true;
  }
  hideEshop() {
    this.showthis = false;
  }
  CheckUrl() {
    if (this.urlgroup.includes(this.checkThisURL)) {
      alert('Il link non è disponibile');
    } else if (this.checkThisURL == '') {
      alert('Ciccio, guarda che il campo è vuoto');
    } else if (!this.urlgroup.includes(this.checkThisURL)) {
      alert('è disponibileh');
    }
  }
  ShowUrl() {
    new ShowUrl();
  }
}
