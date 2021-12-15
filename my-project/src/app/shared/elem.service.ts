/* import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable, tap } from "rxjs";
export interface Elem {
    id: number
    title: string
    completed: boolean
    date?: any
}

@Injectable({ providedIn: 'root' })
export class ElemsService {

    public elems: Elem[] = []

    constructor(public http: HttpClient){}

    fetchElems(): Observable<Elem[]> {
       return this.http.get<Elem[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
       .pipe(tap(elems => this.elems = elems))
    }
    
  onToggle(id:number){
    const idx = this.elems.findIndex(t => t.id === id)
    this.elems[idx].completed = !this.elems[idx].completed 
   }

   removeElem(id: number) {
    this.elems = this.elems.filter(t => t.id !== id )
}

addText(elem: Elem) {
this.elems.push(elem)
}

} */