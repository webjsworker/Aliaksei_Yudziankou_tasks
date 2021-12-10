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
  participants: any = "";
  price: any = "";
  link: string = '';
  key: string = '';
  accessibility: any = "";
  
  advices: Advice[] = [];
  advicesLength: number = 0;
  elementOfArray: any = "Elements of array ";

  public Cardcondition: boolean = false;

  creatAdvice() {
    this.Cardcondition = false;
    this.advices.push(new Advice(this.activity, this.type, this.participants, this.price, this.link, this.key, this.accessibility));

    this.advicesLength = this.advices.length;
    this.elementOfArray = this.advices[this.advicesLength - 1];

  }

  Reset() {
     this.activity = '';
    this.type = '';
    this.participants = "";
    this.price = "";
    this.link = '';
    this.key = '';
    this.accessibility = "";
  }

  addAdvice() {
    this.Cardcondition = true;
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
