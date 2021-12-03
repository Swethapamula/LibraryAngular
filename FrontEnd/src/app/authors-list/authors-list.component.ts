import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
title="Authors";
imageWidth: number = 50;
imageMargin: number = 2;

authors=[{
  authorName:"",
  famousBook:"",
  nationality:"",
  image:""
}]

  constructor(public authorService:AuthorsService, public router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
     this.authorService.getAuthors()
     .subscribe((data)=>{
       this.authors=JSON.parse(JSON.stringify(data));
       console.log(this.authors);
     })
  }

  editAuthor(author:any)
  {
   localStorage.setItem("editauthorid",author._id.toString());
   this.router.navigate(['editAuthor'])

  }
  deleteAuthor(author:any)
  {
    this.authorService.deleteAuthor(author._id)
    .subscribe((data) => {
      this.authors = this.authors.filter(p => p !== author);
    })

  }

}
