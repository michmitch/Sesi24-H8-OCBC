import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginReactiveFormComponent } from './login-reactive-form/login-reactive-form.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginReactiveFormComponent,
    TodoReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
