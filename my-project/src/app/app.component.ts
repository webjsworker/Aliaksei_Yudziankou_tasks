import { Component } from '@angular/core';
/* import { title } from 'process'; */


export interface Elem {
  id:number
  title: string
  completed: boolean
  date?:any
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'Angular, my project'

  public elems: Elem[] = [
    {id: 1, title: 'first title', completed: false, date: new Date()},
    {id: 2, title: 'second title', completed: true, date: new Date()},
    {id: 3, title: 'third title', completed: false, date: new Date()},
  ]
}
