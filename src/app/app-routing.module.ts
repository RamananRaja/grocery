import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { BooksComponent } from './admin/books/books.component';
import { ShopbookComponent } from './users/shopbook/shopbook.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/books', component: BooksComponent },
  { path: 'user/shop', component: ShopbookComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
