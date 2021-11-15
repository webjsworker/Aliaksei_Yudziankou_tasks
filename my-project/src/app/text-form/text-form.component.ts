import { Component, OnInit } from '@angular/core';
import { Elem, ElemsService } from '../shared/elem.service';

@Component({
  selector: 'app-text-form',
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.scss']
})
export class TextFormComponent implements OnInit {

  title: string = ''

  constructor(public elemsService: ElemsService) { }

  ngOnInit(): void {
  }

  addText() {
    const elem: Elem = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    }
    this.elemsService.addText(elem)
    this.title = ''
  }

}
