import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.css']
})
export class AddAuthorsComponent implements OnInit {
 title="Add Author";
  constructor( private router:Router,private authorService:AuthorsService) { }
  authorDetails={
    authorName:"",
    famousBook:"",
    nationality:"",
    image:""
  }

  ngOnInit(): void {
  }
  AddAuthor()
  {
    console.log(this.authorDetails);
    this.authorService.addAuthor(this.authorDetails);
    alert("Success");
    this.router.navigate(['authors-list']);

  }

}
