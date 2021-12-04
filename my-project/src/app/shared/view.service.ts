export class ViewService {
    public elements: any = [["world"], ["hello"],[3,4,5,6,]];
   /*  public elements: any = []; */
    
   
    getElement(): any {
        return this.elements;
    }

    addElement(element: any){
        this.elements.push(element) ;
        console.log("element = " + element)
        console.log("elements = " + this.elements)
    }
}