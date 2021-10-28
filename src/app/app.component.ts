import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms'
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sesi24';

  tasks: Task[] = [];
  categories: string[] = [
    'work',
    'school',
    'edu',
    'shopping'
  ];

  handleFormOnSubmit(form: NgForm){
    const {taskName, category} = form.value;
    console.log(form.value);
    this.tasks.push(new Task(taskName, "incomplete", category));
    form.reset();
  }
}
