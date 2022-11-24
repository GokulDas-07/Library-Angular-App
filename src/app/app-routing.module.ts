import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BooksEntryComponent } from './books-entry/books-entry.component';
import { BooksViewComponent } from './books-view/books-view.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {path:"",component:AdminloginComponent},
  {path:"registration",component:UserRegistrationComponent},
  {path:"userlogin",component:UserLoginComponent},
  {path:"addbooks",component:BooksEntryComponent},
  {path:"viewbooks",component:BooksViewComponent},
  {path:"search",component:BookSearchComponent},
  {path:"delete",component:BookDeleteComponent},
  {path:"issue",component:BookIssueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
