import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-success',
  templateUrl: './contact-success.component.html',
  styleUrls: ['./contact-success.component.scss']
})
export class ContactSuccessComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {

  }

}
