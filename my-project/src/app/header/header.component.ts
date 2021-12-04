import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/date.service';
import { ScoreService } from '../shared/score.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DataService, ScoreService], 

})
export class HeaderComponent implements OnInit {
  headerDate: any 
  score: number = 0 ;   
  
  constructor(private currentDate: DataService, 
    private scoreD : ScoreService ) { }

  ngOnInit(): void {
    this.headerDate = this.currentDate.getData();
    this.score = this.scoreD.getScore()
  }

}
