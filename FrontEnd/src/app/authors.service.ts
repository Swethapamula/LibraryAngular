import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http:HttpClient) { }

  addAuthor(item:any)
  {
     return this.http.post<any>("http://localhost:3050/authorinsert",{"author":item})
    .subscribe((data)=>{console.log(data)});
  }
  getAuthors()
  {
    return this.http.get("http://localhost:3050/authors");
  }
  deleteAuthor(id:any)
  {
    console.log(id);
  return this.http.delete<any>("http://localhost:3050/authordelete/"+id);
  }
  getAuthor(id:any)
  {
    return this.http.get("http://localhost:3050/author/"+id)
  }
  editAuthor(item:any)
  {
    return this.http.put("http://localhost:3050/editauthor",{"author":item})
    .subscribe((data)=>{console.log(data);})
  }
}
