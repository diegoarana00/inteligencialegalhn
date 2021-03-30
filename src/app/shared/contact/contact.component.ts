import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactSuccessComponent } from './contact-success/contact-success.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form = {
    name: null,
    email: null,
    subject: null,
    message: null
  }
  constructor(
    private httpClient: HttpClient,
    private _modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
  send() {
    if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
      console.log("no s epuede enviar")
      return
    }
    let templateParams = {
      //receiver: mainOrder.email + ',' + mainOrder.user,
      receiver: this.form.email + ';',
      subject: "Contacto: " + this.form.name + ', ' + this.form.subject,
      //html: `${conf[0].mail}`
      message: this.form.message
    };

    this.sendEmailPhp(templateParams).subscribe(data => {
      console.log(data)
    }, error => {
      if (error.status == 200) {
        console.log("excelente")
        this._modalService.open(ContactSuccessComponent);
        this.form = {
          name: null,
          email: null,
          subject: null,
          message: null
        }
      }
    })

  }
  sendEmailPhp(param) {

    let send = new FormData()
    send.append('email', JSON.stringify(param))
    let url = 'http://albatrosservices.pe/emails/inteligencialegal/index.php?component=json&action=Saludo'

    /* let url = 'http://sendmail.estilos.com.pe/correos/correos'
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin:1234')
    })

    let newSend = {
      email: param
    } */
    return this.httpClient.post(url, send)
    //return this.httpClient.post(url, send, { headers: headers })

  }

}
