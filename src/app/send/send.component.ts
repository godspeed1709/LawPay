import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  details: any[] = [];
  amount: string = '';
  due_date: string = '';

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.detailsService.firestoreCollection.valueChanges().subscribe((data) => {
      this.details = data;
      this.amount = this.details[+this.detailsService.i].amount.toString();
      this.due_date = this.details[+this.detailsService.i].due_date.toString();
    });
  }

  checkAmt(): void {
    this.amount = this.detailsService.amount;
  }
}
