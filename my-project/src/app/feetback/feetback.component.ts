import { Component, OnInit } from '@angular/core';

export class Message{
  constructor(public name: string, 
              public message: string, 
              public rating: string)
  { }
}

@Component({
  selector: 'app-feetback',
  templateUrl: './feetback.component.html',
  styleUrls: ['./feetback.component.scss'],
  })
export class FeetbackComponent implements OnInit {
  name: string = "";
  message: string = "";
  rating: string = "";
  public Date: Date = new Date();
     
    messages: Message[] = [];
    values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
     
    addMessage(){
        this.messages.push(new Message(this.name, this.message, this.rating));
    }

  constructor() { }

  ngOnInit(): void {
  }

}
