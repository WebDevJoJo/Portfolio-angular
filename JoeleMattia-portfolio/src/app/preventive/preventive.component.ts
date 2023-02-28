import { Component, ElementRef, Input } from '@angular/core';
@Component({
  selector: 'app-preventive',
  templateUrl: './preventive.component.html',
  styleUrls: ['./preventive.component.scss'],
})
export class PreventiveComponent {
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

datacheck : any; 
clicked:boolean=false;
tmparray:number[]=[];
urlmodel:boolean=true;
fullname: any;
email:any;
type:any="50";
Manteinance:any="0";
showthis:boolean=false;
date:any;
urltocalc:any=50;
result:number=0;
urlgroup:string[]= ['www.pippo.it', 'wwww.lol.it', 'www.xd.com'];
checkthis:string="";
priceCalculate(){
  if(this.email && this.fullname && this.date)
  {
    this.clicked=true;
    if(this.urltocalc!=50){
      this.urltocalc=0;
    }
      this.tmparray.push(parseInt(this.type),parseInt(this.urltocalc), parseInt(this.Manteinance));
      this.result=this.tmparray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      this.tmparray=[];
  }
  else{
    alert("nooooh");
  }
}
  eshopMethods() {
    this.showthis=true;
  }
  hideEshop(){
    this.showthis=false;
  }
  CheckUrl() {
    
    if (this.urlgroup.includes(this.checkthis)) {
      alert('Il link non è disponibile');
    } else if (this.checkthis == '') {
      alert('Ciccio, guarda che il campo è vuoto');
    } else if (!this.urlgroup.includes(this.checkthis)) {
      alert('è disponibileh');
    }
  }
}
