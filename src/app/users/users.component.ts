import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  httpdata;
  constructor(public userServiceObj: UsersService) { }

  ngOnInit(): void {
    this.userServiceObj.getUsers()
    .subscribe((users)=>{
      this.httpdata = users;
    });
  }

}
