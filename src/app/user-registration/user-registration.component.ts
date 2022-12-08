import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  name=""
  address=""
  phone=""
  mail=""
  dob=""
  username=""
  password=""
  confirm=""

  readValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"phone":this.phone,"mail":this.mail,"dob":this.dob,
  "username":this.username,"password":this.password,"confirm":this.confirm}
  console.log(data)
  if(this.password==this.confirm){
    alert("User Registered")
    this.name=""
    this.address=""
    this.phone=""
    this.mail=""
    this.dob=""
    this.username=""
    this.password=""
    this.confirm=""
  }else{
    alert("Password and Confirm password doesn't match")
  }
  }

}
