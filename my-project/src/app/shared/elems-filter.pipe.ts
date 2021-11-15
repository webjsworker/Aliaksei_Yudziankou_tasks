import { Pipe, PipeTransform } from "@angular/core";
import { Elem } from "./elem.service";

@Pipe({
    name: 'elemsFilter'
})

export class ElemsFilterPipe implements PipeTransform{
transform(elems: Elem[], search: string = ''): Elem[] {
    if (!search.trim()) {
        return elems
    }
    return elems.filter( elem => {
        return elem.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
}
}