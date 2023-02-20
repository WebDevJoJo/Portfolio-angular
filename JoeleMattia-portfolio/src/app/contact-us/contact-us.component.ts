import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  ngOnChanges(): void {
    this.showinfo();
  }
  showinfo() {
    const copyhere = <HTMLInputElement[]>(
      (<unknown>document.getElementsByClassName('form-control'))
    );
    const printhere = <HTMLElement>document.getElementById('printhere');
    for (let i: number = 0; i < copyhere.length; i++) {
      if (copyhere[i].value != '') {
        printhere.innerHTML += copyhere[i].value + ' ';
      } else if (copyhere[i].value == '') {
        printhere.innerHTML = 'Ma non hai scritto nulla, ti svegli???';
      }
    }
  }
}
