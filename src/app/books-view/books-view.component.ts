import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css']
})
export class BooksViewComponent {
  constructor(private api:ApiService){
    api.fetchBook().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }
  data:any=[]
  

}
