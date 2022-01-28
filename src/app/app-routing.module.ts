import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InvoiceViewComponent } from './invoices/components/invoice-view/invoice-view.component';
import { MyAppComponent } from './modals/my-app/my-app.component';
import { AddFeeComponent } from './program/add-fee/add-fee.component';
import { ShowFeeComponent } from './program/show-fee/show-fee.component';
import { RestaurentDashComponent } from './ResturantApp/restaurent-dash/restaurent-dash.component';

import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:"",
    component:TableComponent
  },
  {
    path:'invoice',
    component:InvoiceViewComponent
  },
  {
    path:'show',
    component:ShowFeeComponent
  },
  {
    path:'appcompo',
    component:MyAppComponent

  },
  {
    path:'rest',
    component:RestaurentDashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
