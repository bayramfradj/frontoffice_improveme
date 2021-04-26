import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidebar: boolean;
  user = null;
  name?: string;
  authenticated: boolean;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.sidebar = false;
    this.authenticated = this.auth.getAuthentificated();
    if (this.authenticated)
    {
      this.auth.getUserProfile().then(data => {
        this.name = data.firstName;
        this.name += ' ' + data.lastName;
      });
    }
  }

  switchSidebar(): void
  {
    this.sidebar = !this.sidebar;
  }

  login(): void{
      this.auth.login();
  }

  register(): void {
      this.auth.register();
  }

  logout(): void {
      this.auth.logout(document.baseURI);
  }
}
