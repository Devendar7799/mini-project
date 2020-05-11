import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service'; 
import {PrimengModule} from './sample.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,PrimengModule,
    DropdownModule,HttpClientModule , 
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
