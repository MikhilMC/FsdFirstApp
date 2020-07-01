import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  httpdata;
  constructor(public userServiceObj: UsersService) { }

  ngOnInit(): void {
    this.userServiceObj.getUsers()
    .subscribe((users)=>{
      this.httpdata = users;
    });
  }
}
