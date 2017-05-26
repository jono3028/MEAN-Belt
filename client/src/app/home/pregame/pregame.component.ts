import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pregame',
  templateUrl: './pregame.component.html',
  styleUrls: ['./pregame.component.css']
})
export class PregameComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  startGame() {
    this._router.navigate(['/letsplay'])
  }

}
