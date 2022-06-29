import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodoService } from './service/todo.service';
import { EditComponent } from './todo-component/edit-component/edit-component';
import { TodoComponent } from './todo-component/todo-component';

@NgModule({
  declarations: [AppComponent, LoginComponent, TodoComponent, EditComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
