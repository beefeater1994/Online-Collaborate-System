import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title="Beefeater";

  username="Beefeater";

  constructor(@Inject("auth") private auth) { }

  ngOnInit() {

  }

  login(): void {
    this.auth.login();
  }

  logout(): void {
    this.auth.logout();
  }

  isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }
}
