import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  ngOnChanges():void{
    this.showinfo();
  }
  showinfo(){
    const copyhere=<HTMLCollection>document.getElementsByClassName("form-control")
    const printhere=<HTMLElement>document.getElementById("printhere");
    for(let i=0;i<copyhere.length;i++)
    {
      printhere.innerHTML+=copyhere.item(i)?.innerHTML;
      console.log(copyhere.item(i)?.innerHTML);
    }
  }
}
