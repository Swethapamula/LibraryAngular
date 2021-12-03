import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
 title="Add Books"
  constructor( private bookservice:BooksService,private router:Router) { }

bookDetails={
  bookTitle:"",
  bookAuthor:"",
  genre:"",
  image:""
  
}
 
  ngOnInit(): void {
  }
  AddBook()
  {
    this.bookservice.addbook(this.bookDetails);
    alert("success");
    this.router.navigate(['books-list']);
  }

}
