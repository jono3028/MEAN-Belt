import { Component, OnInit } from '@angular/core';
import { NewQuestion } from '../newquestion'
import { HomeService } from "app/home/home.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newQuestion: NewQuestion

  constructor(private _homeService: HomeService, private _router: Router) { 
    this.newQuestion = new NewQuestion
  }

  ngOnInit() {
  }
  submitNewQuestion () {
    this._homeService.postNewQuestion(this.newQuestion)
      .then(() => { this._router.navigate(['/'])})
      .catch((err) => {console.log(err)})
  }
  cancelQuestion() {
     this._router.navigate(['/'])
  }
}
