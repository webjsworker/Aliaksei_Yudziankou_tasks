import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })


/* export interface Elem {
    date?: any
} */

export class ViewService {

    /* public elements: Elem[] = [["world"], ["hello"],[3,4,5,6,]]; */
    public elements: any = [ /* ["hello"], ['world'] */];

   /*  public elements: any = []; */
       
    getElement(): Observable<any> {
        console.log("get elements = " + this.elements)
        return this.elements;
    }

    addElement(element: any){
        this.elements.push(element) ;
        console.log("add element = " + element)
        console.log("add elements = " + this.elements)
    }
}