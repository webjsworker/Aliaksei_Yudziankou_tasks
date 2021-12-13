import { Component, OnInit } from '@angular/core';

export class Message{
  constructor(public name: string, 
              public message: string, 
              public rating: string)
  { }
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  })
export class FeedbackComponent implements OnInit {
  name: string = "";
  message: string = "";
  rating: string = "";
  public Date: Date = new Date();
     
    messages: Message[] = [];

    values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
     
    addMessage(){
        this.messages.push(new Message(this.name, this.message, this.rating));
        this.name = '';
        this.message = '';
        this.rating = '';
    }

  constructor() { }

  ngOnInit(): void {
    this.messages.push(new Message(this.name = " Mark", this.message = "It's great app, I've ever seen.", this.rating = "10"));
    this.messages.push(new Message(this.name = " Lici", this.message = "I like using this app while I get home by underground. ", this.rating = "9"));
    this.messages.push(new Message(this.name = " Борис", this.message = "Приятное приложене, нехватает выбора языка. ", this.rating = "7"));
    this.name = '';
    this.message = '';
    this.rating = '';
  }

}
