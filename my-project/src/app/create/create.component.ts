import { Component, OnInit } from '@angular/core';
import { ViewService } from '../shared/view.service';
import { ViewingService } from '../shared/viewing.service';

export class Advice {
  constructor(public activity: string,
    public type: string,
    public participants: number,
    public price: number,
    public link: string,
    public key: string,
    public accessibility: number) { }
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ViewService],
})

export class CreateComponent implements OnInit {

  activity: string = '';
  type: string = '';
  participants: number = 0;
  price: number = 0;
  link: string = '';
  key: string = '';
  accessibility: number = 0;
  advices: Advice[] = [];

  creatAdvice() {
    this.advices.push(new Advice(this.activity, this.type, this.participants, this.price, this.link, this.key, this.accessibility));
  }

  addAdvice(){
    this.newAdvice.addElement(this.activity);

    this.element.addE(new Advice(this.activity, this.type, this.participants, this.price, this.link, this.key, this.accessibility) /* {id: 1232,
      title: "string",
      completed: false,
      date: this.activity} */  )
   
  }

  constructor(private newAdvice: ViewService,
    public element: ViewingService) { }
  ngOnInit(): void {
  }

}
