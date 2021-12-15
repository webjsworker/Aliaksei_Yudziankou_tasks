import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

export interface Element {
  activity: string ;
  type: string ;
  participants: number ;
  price: number ;
  link: string ;
  key: string ;
  accessibility: number ;
}

@Injectable({ providedIn: 'root' })

export class ViewService {

    /* public elements: Elem[] = [["world"], ["hello"],[3,4,5,6,]]; */
    /* public elements: Element{} ; */

    public elements: any = [];
       
    getElement(): any {
        
        return this.elements;
    }

    addElement(element: any){
        
    }
}