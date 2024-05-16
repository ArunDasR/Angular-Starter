import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateComponent } from './employee/create/create.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TestInterceptor } from './test.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
    // ToastrModule.forRoot(),
    // BrowserAnimationModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass: TestInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
