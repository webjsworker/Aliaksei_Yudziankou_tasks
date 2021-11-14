import { Component, Input, OnInit } from '@angular/core';
import { Elem } from '../app.component';

@Component({
  selector: 'app-elem',
  templateUrl: './elem.component.html',
  styleUrls: ['./elem.component.scss']
})
export class ElemComponent implements OnInit {
  
 @Input() elems: Elem[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
