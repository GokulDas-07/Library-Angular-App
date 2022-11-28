import { Component } from '@angular/core';

@Component({
  selector: 'app-books-entry',
  templateUrl: './books-entry.component.html',
  styleUrls: ['./books-entry.component.css']
})
export class BooksEntryComponent {
  title=""
  author=""
  description=""
  publisher=""
  language=""
  distributor=""
  release=""
  price=""
  image=""


  readValues=()=>
  {
    let data:any={"title":this.title,"author":this.author,"description":this.description,"publisher":this.publisher,"language":this.language,
    "distributor":this.distributor,"release":this.release,"price":this.price,"image":this.image}
    console.log(data)
  }


}
