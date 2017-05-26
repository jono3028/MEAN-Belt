import { Component, OnInit } from '@angular/core';
import { Question } from "../question";
import { HomeService } from "app/home/home.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  quiz: Array<Question>
  answers
  score: number

  constructor(private _homeService:  HomeService,  private _router: Router) {
    this.score = 0
    this.quiz = [new Question, new Question, new Question]
    this.answers = []
    this._homeService.getQuiz()
      .then((data) => {this.quiz = data})
      .catch((err) => {console.log(err)})
  }
  ngOnInit() {}
  submitGame() {
    for (var x =0; x < 3; x++){
      if(this.answers[x] === this.quiz[x].answer) {
        this.score++
      }
    }
    this._homeService.postGame(this.score)
      .then(() =>  this._router.navigate(['/']))
      .catch(err => console.log(err))
  }
  cancelGame() {
    this._router.navigate(['/'])
  }
}

