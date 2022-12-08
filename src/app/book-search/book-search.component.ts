import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  title=""
  searchData:any=""
  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"title":this.title}
    console.log(data)
    this.api.searchBook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("Book not Found!!")
        }else{
          this.searchData=response;
        }
      }
    )
  }

}
