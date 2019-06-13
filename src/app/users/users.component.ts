import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../interfaces/user";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users:User[];
  constructor(private userService: UserService) {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;

        // for (let user of users) {
        //   console.log(user.PrintUser());
        // }

      })
  }

  ngOnInit() {

  }

}
