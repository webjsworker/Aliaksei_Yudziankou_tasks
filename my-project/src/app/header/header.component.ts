import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/date.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DataService]
})
export class HeaderComponent implements OnInit {
  headerDate: any 
  score: number = 10; 

  

  constructor(private currentDate: DataService) { }

  ngOnInit(): void {
    this.headerDate = this.currentDate.getData();
  }

}
