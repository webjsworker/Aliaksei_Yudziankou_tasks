import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable, tap } from "rxjs";
export interface Elem {
    activity: string ;
  type: string ;
  participants: number ;
  price: number ;
  link: string ;
  key: string ;
  accessibility: number ;
}

@Injectable({ providedIn: 'root' })

export class ViewingService {

    public elems: Elem[] = []

    constructor(/* public http: HttpClient */){}

    fetchElems()/* : Observable<Elem[]> */ {
        console.log("fetch elements = " + this.elems)

       return this.elems /* this.http.get<Elem[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
       .pipe(tap(elems => this.elems = elems)) */
    }
   
    addE(element:Elem) {
        this.elems.push(element) 
    }

    RemoveElement(key : any){
        this.elems = this.elems.filter(t => t.key !== key)

    }

}