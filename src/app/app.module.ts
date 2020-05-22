import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecordListComponent } from './record-list/record-list.component';
import { RecordEntryComponent } from './record-entry/record-entry.component';
import {FormsModule} from '@angular/forms';
import { RecordManagerComponent } from './record-manager/record-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordListComponent,
    RecordEntryComponent,
    RecordManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
