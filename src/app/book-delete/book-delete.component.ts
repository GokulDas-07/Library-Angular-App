import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {
  id=""
  deleteData:any=""
  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"id":this.id}
    console.log(data)
    this.api.deleteBook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("Wrong Book id")
        }else{
          this.deleteData=response;
          alert("Book Deleted")
          this.id=""
        }
      }
    )
  }

}
