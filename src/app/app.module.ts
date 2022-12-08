import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BooksEntryComponent } from './books-entry/books-entry.component';
import { BooksViewComponent } from './books-view/books-view.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { NavbaruserComponent } from './navbaruser/navbaruser.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    BooksEntryComponent,
    BooksViewComponent,
    BookSearchComponent,
    BookDeleteComponent,
    BookIssueComponent,
    NavbaradminComponent,
    NavbaruserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
