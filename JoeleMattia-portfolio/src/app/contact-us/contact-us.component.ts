import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  messaggio:string="";
  username:string="";
  domain:string="";
  Subject:string="";
  txtfromuser:string="";
  showinfo() {
    if(this.username && this.domain && this.Subject && this.txtfromuser)
   {
    this.messaggio="Username: "+this.username+"@"+this.domain+" Soggetto: "+this.Subject+" Il tuo messaggio: "+this.txtfromuser;
   } 
    else {
        this.messaggio='Ma non hai scritto nulla, ti svegli???';
      }
  }
}
