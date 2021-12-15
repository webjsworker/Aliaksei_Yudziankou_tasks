import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable, tap } from "rxjs";
export interface Elem {
    activity: string ;
  type: string ;
  participants: number ;
  price: number ;
  link: string ;
  key: number ;
  accessibility: number ;
}

@Injectable({ providedIn: 'root' })

export class ViewingService {

    public elems: Elem[] = []

    constructor(/* public http: HttpClient */){}

    fetchElems()/* : Observable<Elem[]> */ {
      

       return this.elems 
    }
   
    addE(element:Elem) {
        this.elems.push(element) 
    }

    RemoveElement(key : any){
        this.elems = this.elems.filter(t => t.key !== key)

    }

}