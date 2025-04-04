import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  constructor(private userService: UserService) { }

  gettestjson(): User {
    const testjson: User = {
      username: "poorna123",
      password: "poorna123"
    }
    return testjson;
  }
  ngOnInit(): void { 
    this.login();
  }


  login() {
    this.userService.login(this.gettestjson()).subscribe({
      next: (response) => {
        console.log(response);
        sessionStorage.setItem('token', response.access);
      },
      error: (error) => {
        console.log(error);
      }
    }); 
    }

}
