import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent implements OnInit {

  todoForm = new FormGroup({
    taskName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9 ]+$')
    ]),
    category: new FormControl('', [
      Validators.required,
    ])
  });

  tasks: Task[] = [];
  categories: string[] = [
    'Work',
    'Finance',
    'House',
    'Entertainment'
  ];
  isSubmitted = false;

  containItems = false;

  get taskName(){
    return this.todoForm.get('taskName');
  }

  get category(){
    return this.todoForm.get('category');
  }



  addTodoReactive(){
    this.isSubmitted = true;
    if(this.todoForm.valid){
      // const {taskName, category} = this.todoForm.taskName;
      this.tasks.push(new Task(this.todoForm.value.taskName, "incomplete", this.todoForm.value.category));
      this.containItems = true;
    }
    console.log(this.tasks)
    console.log(this.taskName);
    
    // const {taskName, category} = form.value;
    // console.log(form.value);
    // this.tasks.push(new Task(taskName, "incomplete", category));
    // form.reset();
  }

  toggleDone(id: number){
    this.tasks.map((v,i) => {
      if(i==id){
        if(v.status != 'done'){
          v.status = 'done';
        }
        else{
          v.status = 'incomplete';
        }
      } 
      // console.log(v);
      return v;
    })
  }

  deleteTask(id: number){
    this.tasks = this.tasks.filter((v,i) => i != id);
    alert(`ID ${id + 1} Deleted`);
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmitState(){
    if(this.isSubmitted){
      this.isSubmitted = false;
    }
  }

}
