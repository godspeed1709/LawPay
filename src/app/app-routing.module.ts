import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsAddComponent } from './details-add/details-add.component';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [
  { path: '', redirectTo: '/details-add', pathMatch: 'full'},
  { path: 'dash', component: DashComponent },
  { path: 'details-add', component: DetailsAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
