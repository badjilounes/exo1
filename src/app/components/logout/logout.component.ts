import { Component, OnInit } from '@angular/core';
import { ClientAuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private readonly authService: ClientAuthService) { }

  ngOnInit() {
    this.authService.logout();
  }

}
