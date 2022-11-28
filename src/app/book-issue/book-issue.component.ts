import { Component } from '@angular/core';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent {
  name=""
  title=""
  issue=""
  membership=""

  readValues=()=>
  {
    let data:any={"name":this.name,"title":this.title,"issue":this.issue,"membership":this.membership}
    console.log(data)
  }

  

}
