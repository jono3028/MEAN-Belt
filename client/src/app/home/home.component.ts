import { Component, OnInit } from '@angular/core';
import { HomeService } from "app/home/home.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string // User generated identification name
  
  constructor(private _homeService: HomeService, private _router: Router) { 
  }

  ngOnInit() {
    this._homeService.checkStatus()
      .then((data) => {this.username = data.loggedIn})
      .catch(err => console.log(err))
  }
  logout () {
    this._homeService.logout()
      .then(() => {window.location.reload(); console.log('Logged Out')
      })
      .catch((err) => {console.log(err)})
  }
}
