import { Component, OnInit } from '@angular/core';
import { ViewingService } from '../shared/viewing.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})

export class ViewComponent implements OnInit {
  elem: any = [];

  constructor(public viewing: ViewingService) { }

  ngOnInit(): void {
    this.viewing.fetchElems()
  }

  Remove(value: any) {
    this.viewing.RemoveElement(value)
    console.log("reset value = " + value)
  }

  

}
