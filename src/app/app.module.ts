import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { TableComponent } from './table/table.component';
import { InvoiceViewComponent } from './invoices/components/invoice-view/invoice-view.component';
import { DxtableComponent } from './dxtable/dxtable.component';
import { AddFeeComponent } from './program/add-fee/add-fee.component';
import { ShowFeeComponent } from './program/show-fee/show-fee.component';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatErrorsModule } from 'ngx-mat-errors';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DevExtremeModule } from 'devextreme-angular';
import { SharedService } from './program/shared.service';
import { MyDialogModalComponent } from './modals/my-dialog-modal/my-dialog-modal.component';
import { MyAppComponent } from './modals/my-app/my-app.component';
import { RestaurentDashComponent } from './ResturantApp/restaurent-dash/restaurent-dash.component';




@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent,
    TableComponent,
    InvoiceViewComponent,
    DxtableComponent,
    AddFeeComponent,
    ShowFeeComponent,
    MyDialogModalComponent,
    MyAppComponent,
    RestaurentDashComponent,
    
  ],
  entryComponents:[AddFeeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    NgxMatErrorsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DevExtremeModule


    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
