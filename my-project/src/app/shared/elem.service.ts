import { Injectable } from "@angular/core";

export interface Elem {
    id: number
    title: string
    completed: boolean
    date?: any
}

@Injectable({ providedIn: 'root' })
export class ElemsService {

    public elems: Elem[] = [
        { id: 1, title: 'first title', completed: false, date: new Date() },
        { id: 2, title: 'second title', completed: true, date: new Date() },
        { id: 3, title: 'third title', completed: false, date: new Date() },
    ]
    
  onToggle(id:number){
    const idx = this.elems.findIndex(t => t.id === id)
    this.elems[idx].completed = !this.elems[idx].completed 
   }

   removeElem(id: number) {
    this.elems = this.elems.filter(t => t.id !== id )
}

}