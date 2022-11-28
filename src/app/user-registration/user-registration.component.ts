import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  name=""
  aadhar=""
  address=""
  phone=""
  mail=""
  dob=""
  username=""
  password=""
  confirm=""

  readValues=()=>
  {
    let data:any={"name":this.name,"aadhar":this.aadhar,"address":this.address,"phone":this.phone,"mail":this.mail,"dob":this.dob,
  "username":this.username,"password":this.password,"confirm":this.confirm}
  console.log(data)
  }

}
