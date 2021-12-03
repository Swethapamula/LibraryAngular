import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BooksListComponent } from './books-list/books-list.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { EditbookComponent } from './editbook/editbook.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { BooksService } from './books.service';
import { AuthorsService } from './authors.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksListComponent,
    AuthorsListComponent,
    AddbooksComponent,
    AddAuthorsComponent,
    EditbookComponent,
    EditauthorComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthorsService,BooksService,AuthGuard,AuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
