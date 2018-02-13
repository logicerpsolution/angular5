import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppComponent } from './app.component';
import {DataTable} from './component/datatable.component';
import {AddRecord} from './component/addrecord.component';
import {EditRecord} from './component/editrecord.component';


@NgModule({
  declarations: [
    AppComponent,
	DataTable,
	AddRecord,
	EditRecord
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
	FormsModule,
	Ng2SmartTableModule ,
    HttpModule,
    Ng2TableModule,
    PaginationModule.forRoot(),
	//FormsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
