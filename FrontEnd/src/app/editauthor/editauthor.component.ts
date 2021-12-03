import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
 import { Router } from '@angular/router';
 import { author } from './author.model';

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {
 title="Edit Author";
 imageWidth: number = 50;
 imageMargin: number = 2;

 authorDetails:any;

constructor( public authorService:AuthorsService, public router:Router) { }
  ngOnInit(): void {
    let id= localStorage.getItem("editauthorid");
    this.authorService.getAuthor(id).subscribe(data=>{
      this.authorDetails=JSON.parse(JSON.stringify(data));
      console.log(this.authorDetails);
    })
  }
  editAuthor()
  {

     this.authorService.editAuthor(this.authorDetails);
     alert("Updated Successfully");
     this.router.navigate(['authors-list'])

  }

}
