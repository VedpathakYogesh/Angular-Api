import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';       
import { FormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchdataComponent } from './searchdata/searchdata.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchdataComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,  
    AppRoutingModule,BrowserAnimationsModule, BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
