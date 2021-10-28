import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-login-reactive-form',
  templateUrl: './login-reactive-form.component.html',
  styleUrls: ['./login-reactive-form.component.css']
})
export class LoginReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentUser:{
    isLogin: boolean,
    username: string,
    password: string
  } = {isLogin: false, username:'', password:''};

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  users: User[] = [
    new User('username', 'password')
  ];

  userFound: boolean = false;

  isSubmitted = false;

  msg = "";

  
  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }

  onLogin(){
    // console.log(this.loginForm);
    // console.log(this.password);
    
    // this.isSubmitted = true;
    
    for(let user of this.users){
      if(this.loginForm.value.username == user.username){
        this.userFound = true;
        if(this.loginForm.value.password == user.password){
          this.currentUser = {
            isLogin: true,
            username: this.loginForm.value.username,
            password: this.loginForm.value.password
          };
          this.msg = `Successfully Login, Hello ${this.loginForm.value.username}`;
        }
        else{
          this.msg = 'Wrong Password';
          console.log('password salah');
          this.currentUser = {
            isLogin: false,
            username: this.loginForm.value.username,
            password: this.loginForm.value.password
          };
        }
      }
      // console.log(user.username);
      // console.log(user.password);
    }
    if(!this.userFound){
      this.msg = 'Username Not Found';
      console.log('username not found');
      this.currentUser = {
        isLogin: false,
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
      
    }
  }
  
  register(){
    this.currentUser = {
      isLogin: false,
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    // this.isSubmitted = true;
    for(let user of this.users){
      if(this.loginForm.value.username == user.username){
        this.userFound = true;
      }
    }
    if(this.userFound){
      this.msg = 'Username Already Used';
    }
    else{
      
      console.log(this.loginForm.value.username);
      this.users.push(new User(this.loginForm.value.username, this.loginForm.value.password));
      console.log(this.users);
      this.msg = 'User Registered';
    }
    this.userFound = false;    

  }

  handleSubmitState(){
    if(this.isSubmitted){
      this.isSubmitted = false;
    }
  }

}
