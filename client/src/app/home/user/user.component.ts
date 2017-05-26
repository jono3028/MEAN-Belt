import { Component, OnInit } from '@angular/core';
import { HomeService } from "app/home/home.service";
import { Router } from "@angular/router";
import "rxjs"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  username

  constructor(private  _homeService: HomeService, private _router: Router) { }

  ngOnInit() {
  }
  login () {
    this._homeService.login(this.username)
      .then(() => {window.location.reload()})
      .catch((err) => {console.log(err)})
  }
  
    

}
