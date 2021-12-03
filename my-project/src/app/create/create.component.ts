import { Component, OnInit } from '@angular/core';

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
  styleUrls: ['./create.component.scss']
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

  constructor() { }
  ngOnInit(): void {
  }

}
