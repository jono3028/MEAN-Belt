import { Component, OnInit } from '@angular/core';
import { HomeService } from "app/home/home.service";
import { Game } from "../games";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  games

  constructor(private _homeService: HomeService) { 
    this.games = [new Game]
    this.getGames()
  }

  ngOnInit() {
  }
  getGames () {
    this._homeService.getGames()
      .then(data => this.games = data)
      .catch(err => console.log(err))
  }
}
