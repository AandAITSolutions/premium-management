import { Component, OnInit } from '@angular/core';
import { UserService, User } from './users/user.service';
import {Observable} from 'rxjs/Observable';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app';
  users : User[]
  constructor(private userService : UserService)
  {}


  ngOnInit(): void {
     this.userService.getUser().subscribe(data => {
       this.users = data;
       console.log(data);
     })
  }
}
