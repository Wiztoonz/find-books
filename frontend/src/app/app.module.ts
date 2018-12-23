import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from "./app-routing.module";
import {MaterialHelperModule} from "./material-helper/material-helper.module";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import {AppService} from "./services/app.service";
import { CardComponent } from './home/card/card.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateBookComponent } from './create-book/create-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookDetailsComponent,
    CardComponent,
    CreateBookComponent
  ],
  entryComponents: [CreateBookComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialHelperModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
