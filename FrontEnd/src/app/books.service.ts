import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(public http:HttpClient) { }
  addbook(item:any)
  {
    return this.http.post<any>("http://localhost:3050/bookinsert",{"book":item})
    .subscribe((data)=>{console.log(data)});  
  }
  getBooks()
  {
    return this.http.get("http://localhost:3050/books");
  }
  deleteBook(id:any)
  {
     return this.http.delete("http://localhost:3050/bookdelete/"+id);
  }
  getBookbyID(id:any)
  {
    return this.http.get("http://localhost:3050/book/"+id);
  }
  editBook(item:any)
  {
    return this.http.put("http://localhost:3050/bookupdate",{"book":item})
    .subscribe ((data)=>{console.log(data);})
  }
}
