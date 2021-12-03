import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
 title="EditBook";
 imageWidth: number = 50;
 imageMargin: number = 2;

 bookDetail=[{
  bookTitle:"",
  bookAuthor:"",
  genre:"",
  image:""
  
}]

  constructor( public bookService:BooksService,public router:Router) { }

  ngOnInit(): void {
    let book_id=localStorage.getItem("bookId");
    this.bookService.getBookbyID(book_id)
    .subscribe(data=>
    {
     console.log(data);
     this.bookDetail= JSON.parse(JSON.stringify(data));
     console.log(this.bookDetail);
    })

  }

  EditBook()
  {
    this.bookService.editBook(this.bookDetail);
    alert("Updated Succssfully");
    this.router.navigate(['books-list'])

  }

}
