import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { BooksListComponent } from './books-list/books-list.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { EditbookComponent } from './editbook/editbook.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path:'home',component:HomeComponent
  },

  {
    path:'login',component:LoginComponent
  },
  {
    path:'books-list',component:BooksListComponent
  },
  {
    path:'authors-list',component:AuthorsListComponent
  },
  {
    path:'addbooks',canActivate:[AuthGuard],component:AddbooksComponent
  },
  {
    path:'addauthors',canActivate:[AuthGuard],component:AddAuthorsComponent
  },
  {
    path:'editAuthor',component:EditauthorComponent
  },
  {
    path:'editBook',component:EditbookComponent
  },
  {
    path:'signup',component:SignupComponent

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
