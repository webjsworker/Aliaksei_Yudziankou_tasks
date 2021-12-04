import { Component, OnInit } from '@angular/core';
import { ViewService } from '../shared/view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [ViewService], 
})

export class ViewComponent implements OnInit {
   elem: any = []

  constructor(private elements: ViewService) { }

  ngOnInit(): void {
    this.elem = this.elements.getElement();
    console.log("view.component = " + this.elem  )
  }

}
