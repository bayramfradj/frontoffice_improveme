import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidebar: boolean;
  name?: string;
  authenticated: boolean;
  carousel: boolean;
  fragment: string;
  url: string;
  constructor(private auth: AuthService, private route: ActivatedRoute) { }

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

    this.url = window.location.href;


    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
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
