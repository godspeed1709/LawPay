import { Component } from '@angular/core';
import { DetailsService } from '../services/details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-input',
  templateUrl: './details-input.component.html',
  styleUrls: ['./details-input.component.css']
})
export class DetailsInputComponent {

  i:string = '0';

  constructor(private detailsService: DetailsService, private router: Router) { }

  name = '';
  invoice_no = '';
  acc_no = '';
  client_com = '';
  client_add = '';
  client_email = '';
  client_phone = '';
  seller_com = '';
  seller_add = '';
  seller_email = '';
  seller_phone = '';
  client_city = '';
  issueDate: Date = new Date();
  dueDate: Date = new Date();

  onadd():void {
    this.detailsService.addDetails(this.detailsService.i, {
      name: this.name,
      invoice_no: this.invoice_no,
      acc_no: this.acc_no,
      client_com: this.client_com,
      client_add: this.client_add,
      client_email: this.client_email,
      client_phone: this.client_phone,
      client_city: this.client_city,
      seller_com: this.seller_com,
      seller_add: this.seller_add,
      seller_email: this.seller_email,
      seller_phone: this.seller_phone,
      issue_date: this.issueDate.toLocaleString(),
      due_date: this.dueDate.toLocaleString(),
    });
    this.name = '';
    this.invoice_no = '';
    this.acc_no = '';
    this.client_com = '';
    this.client_add = '';
    this.client_email = '';
    this.client_phone = '';
    this.client_city = '';
    this.seller_com = '';
    this.seller_add = '';
    this.seller_email = '';
    this.seller_phone = '';
    this.issueDate = new Date();
    this.dueDate = new Date();
    this.detailsService.i = (+this.detailsService.i + 1).toString();
    this.router.navigate(['./dash'])
  }
}
