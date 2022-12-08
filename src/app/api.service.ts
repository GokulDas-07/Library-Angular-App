import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchBook=()=>
  {
    return this.http.get("http://localhost:8000/view")
  }

  addBook=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8000/entry",dataToSend)
  }

  searchBook=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8000/search",dataToSend)
  }

  deleteBook=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8000/delete",dataToSend)
  }
}
