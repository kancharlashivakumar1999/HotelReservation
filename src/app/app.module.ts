import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Log/login/login.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialExampleModule } from 'src/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {  MatDialogModule } from '@angular/material/dialog';
import { DeleteComponent } from './Delete/delete/delete.component';
import { AddComponent } from './Add/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DeleteComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,MaterialExampleModule,MatPaginatorModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
