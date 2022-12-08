import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-books-entry',
  templateUrl: './books-entry.component.html',
  styleUrls: ['./books-entry.component.css']
})
export class BooksEntryComponent {
  title=""
  image=""
  description=""
  price=""
  
  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"title":this.title,"image":this.image,"description":this.description,"price":this.price,}
    this.api.addBook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("Book Added")
          this.title=""
          this.image=""
          this.description=""
          this.price=""
        }else{
          alert("Invalid Entry")
        }
      }
    )
  }


}
