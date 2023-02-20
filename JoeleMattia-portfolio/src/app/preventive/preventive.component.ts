import { Component } from '@angular/core';
@Component({
  selector: 'app-preventive',
  templateUrl: './preventive.component.html',
  styleUrls: ['./preventive.component.scss'],
})
export class PreventiveComponent {
  ngOnChanges() {
    this.priceCalculate();
    this.eshopMethods();
    this.ShowUrl();
  }
  priceCalculate() {
    const inputs = <HTMLInputElement[]>(
      (<unknown>document.getElementsByClassName('form-check-input'))
    );
    const arr = []; // Array to store the checked values
    const mytext = <HTMLInputElement>document.getElementById('TotText');
    const email = <HTMLInputElement>document.getElementById('floatingInput');
    const password = <HTMLInputElement>(
      document.getElementById('floatingPassword')
    );
    if (email.value != '' && password.value != '') {
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
          arr.push(parseInt(inputs[i].value));
        }
      }
      mytext.className = 'visible';
      mytext.value =
        'It will cost € ' +
        arr.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
    } else if (email.value == '' || password.value == '') {
      alert('Wei, ciccio, guarda che devi identificarti');
    }
  }
  eshopMethods() {
    const eshop = <HTMLInputElement>document.getElementById('eshop');
    const gimmemoney = <HTMLInputElement>document.getElementById('gimmemoney');
    if (eshop.checked) {
      gimmemoney.className = 'visible';
    } else {
      gimmemoney.className = 'invisible';
    }
  }
  ShowUrl() {
    const switcheck = <HTMLInputElement>(
      document.getElementById('flexSwitchCheckChecked')
    );
    const url = <HTMLElement>document.getElementById('chooseurl');
    if (switcheck.checked) {
      url.className = 'visible';
    } else {
      url.className = 'invisible';
    }
  }
  Check() {
    const url = (<HTMLInputElement>(
      (<unknown>document.getElementById('basic-url'))
    )).value;
    const urlgroup = ['www.pippo.it', 'wwww.lol.it', 'www.xd.com'];
    if (urlgroup.includes(url)) {
      alert('Il link non è disponibile');
    } else if (url == '') {
      alert('Ciccio, guarda che il campo è vuoto');
    } else if (!urlgroup.includes(url)) {
      alert('è disponibileh');
    }
  }
}
