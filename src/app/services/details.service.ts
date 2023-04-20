import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  firestoreCollection: AngularFirestoreCollection;
  details:any = {};
  i:string = '0';
  amount: string = '';

  constructor(private firestore: AngularFirestore) {
    this.firestoreCollection = this.firestore.collection('details');
   }

   addDetails(id: string, details: any) {
     this.firestoreCollection.doc(id).set(details);
     this.details = details;
   }

   addAmountDetails(id: string, amount: string) {
    this.details.amount = amount;
    this.amount = amount;
    this.firestoreCollection.doc(id).set(this.details);
   }
}
