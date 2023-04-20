import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SendComponent } from './send/send.component';
import { DashComponent } from './dash/dash.component';
import { DetailsAddComponent } from './details-add/details-add.component';

import { environment } from '../environments/environment';
import { DetailsInputComponent } from './details-input/details-input.component';
import { LoginComponent } from './login/login.component';
import { LawComponent } from './law/law.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    SendComponent,
    DashComponent,
    DetailsAddComponent,
    DetailsInputComponent,
    LoginComponent,
    LawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
