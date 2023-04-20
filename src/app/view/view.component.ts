import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  i:number = 0;
  ele:Line[] = [{
    desc: '',
    hrs: '',
    rate: '',
    tax: '',
    line_total: 0.00,
    isDisabled: false
  }];

  sub_val = 0.00;
  disc_val = 0.00;
  tax_val = 0.00;
  total_val = 0.00;

  details: any[] = [];
  seller_com = '';
  seller_add = '';
  seller_email = '';
  invoice_no = '';
  issueDate = '';
  dueDate = '';
  client_name = '';
  client_add = '';
  client_com = '';
  client_city = '';

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.detailsService.firestoreCollection.valueChanges().subscribe((data) => {
      this.details = data;
      this.seller_com = this.details[this.details.length - 1].seller_com;
      this.seller_add = this.details[this.details.length - 1].seller_add;
      this.seller_email = this.details[this.details.length - 1].seller_email;
      this.invoice_no = this.details[this.details.length - 1].invoice_no;
      this.issueDate = this.details[this.details.length - 1].issue_date;
      this.dueDate = this.details[this.details.length - 1].due_date;
      this.client_name = this.details[this.details.length - 1].name;
      this.client_add = this.details[this.details.length - 1].client_add;
      this.client_com = this.details[this.details.length - 1].client_com;
      this.client_city = this.details[this.details.length - 1].client_city;
    })
  }

  onFocusTotal():void {
    this.ele[this.i].line_total = +(+this.ele[this.i].hrs * +this.ele[this.i].rate + +this.ele[this.i].tax).toFixed(2);
  }

  onadd():void {
    this.ele.push(new Line());
    this.ele[this.i].line_total = +(+this.ele[this.i].hrs * +this.ele[this.i].rate + +this.ele[this.i].tax).toFixed(2);
    this.sub_val += +(this.ele[this.i].line_total).toFixed(2);
    this.disc_val = +(this.sub_val * 0.05).toFixed(2);
    this.tax_val = +(this.sub_val * 0.15).toFixed(2);
    this.total_val = +(this.sub_val - this.disc_val + this.tax_val).toFixed(2);
    this.detailsService.addAmountDetails((this.details.length - 1).toString(), (this.total_val).toString());
    this.ele[this.i].isDisabled = true;
    this.i++;
  }
}

class Line {
  desc = '';
  hrs = '';
  rate = '';
  tax = '';
  line_total = 0.00;
  isDisabled = false;
}
