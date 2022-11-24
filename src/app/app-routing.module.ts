import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BooksEntryComponent } from './books-entry/books-entry.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {path:"",component:AdminloginComponent},
  {path:"registration",component:UserRegistrationComponent},
  {path:"userlogin",component:UserLoginComponent},
  {path:"addbooks",component:BooksEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
