import { Component, ElementRef, Input } from '@angular/core';
import { NgModel, NgModelGroup } from '@angular/forms';
@Component({
  selector: 'app-preventive',
  templateUrl: './preventive.component.html',
  styleUrls: ['./preventive.component.scss'],
  template:
  `
    datacheck: {{datacheck}}
  `
})
export class PreventiveComponent {
// constructor(
//   @Input("ngInput") datacheck:string;
// )
//   ngOnChanges() {
//     this.eshopMethods();
//     this.ShowUrl();
//   }
//   priceCalculate(datacheck:string) {
//     const arr = []; // Array to store the checked values
//     const mytext = <HTMLInputElement>document.getElementById('TotText');
//     const email = <HTMLInputElement>document.getElementById('floatingInput');
//     const password = <HTMLInputElement>(
//       document.getElementById('floatingPassword')
//     );
//     if (datacheck!="") {
//       console.log("lol");
//       // for (let i = 0; i < datacheck.length; i++) {
//       //   if (datacheck[i].checked) {
//       //     arr.push(this.datacheck[i].value);
//       //   }
//       }
//     //   mytext.className = 'visible';
//     //   mytext.value =
//     //     'It will cost € ' +
//     //     arr.reduce(
//     //       (accumulator, currentValue) => accumulator + currentValue,
//     //       0
//     //     );
//     // } else if (email.value == '' || password.value == '') {
//     //   alert('Wei, ciccio, guarda che devi identificarti');
//     // }
//   }
clicked:boolean=false;
//arr = []; 
priceCalculate(myvalue:any){
  this.clicked=true;
 console.log(myvalue);
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
