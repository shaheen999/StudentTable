import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StudentModule} from './student/student.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';

//import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './student/login/login.component';
//import { StudentlistComponent } from './student/studentlist/studentlist.component';
@NgModule({
  declarations: [
    AppComponent,
    //StudentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

