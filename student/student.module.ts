import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedDataService } from './shared-data.service';
import { Injectable } from "@angular/core";
@NgModule({
  declarations: [
    CreatestudentComponent,
    UpdatestudentComponent,
    StudentlistComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule, ReactiveFormsModule,BrowserModule,FormsModule
  ],
  exports://it is added in order to provider permission to login component to interact with various components
  [
    CommonModule, 
    ReactiveFormsModule,
    BrowserModule,
    StudentlistComponent,
    UpdatestudentComponent,
    CreatestudentComponent,
    LoginComponent,
    FormsModule,
  ]

})
export class StudentModule {
 }
