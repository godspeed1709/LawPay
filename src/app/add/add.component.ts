import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../services/details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  details: any[] = [];
  client_name = '';
  client_com = '';
  client_add = '';
  client_email = '';

  constructor(private detailsService: DetailsService, private router: Router) { }

  ngOnInit(): void {
    this.detailsService.firestoreCollection.valueChanges().subscribe((data) => {
      this.details = data;
      this.client_add = this.details[this.details.length - 1].client_add;
      this.client_com = this.details[this.details.length - 1].client_com;
      this.client_email = this.details[this.details.length - 1].client_email;
      this.client_name = this.details[this.details.length - 1].name;
    });
  }

  redirect(): void {
    this.router.navigate(['/details-add']);
  }
}
