import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/api/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsersMe().toPromise().then();
  }

}
