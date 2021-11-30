import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerDate: Date = new Date();
  public score: number = 10; 

  constructor() { }

  ngOnInit(): void {
  }

}
