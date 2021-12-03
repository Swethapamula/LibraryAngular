import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  title="Books";
  imageWidth: number = 50;
  imageMargin: number = 2;
  books=[{
    bookTitle:"",
    bookAuthor:"",
    genre:"",
    image:""
  }]

  constructor(public router:Router,public bookService:BooksService,public _auth:AuthService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
      console.log(this.books);
  })
}

  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
    .subscribe((data) => {
      this.books = this.books.filter(p => p !== book);
    })

  }
  editBook(book:any)
  {
    localStorage.setItem("bookId",book._id);
    this.router.navigate(['editBook'])
  }

}

