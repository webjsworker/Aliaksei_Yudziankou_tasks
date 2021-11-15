import { Component, OnInit} from '@angular/core';
import { ElemsService } from '../shared/elem.service';


@Component({
  selector: 'app-elem',
  templateUrl: './elem.component.html',
  styleUrls: ['./elem.component.scss']
})
export class ElemComponent implements OnInit {
  
   constructor(public elemService: ElemsService)  { }

  ngOnInit(): void {
  }

  onChange(id: number) {
   this.elemService.onToggle(id)
  }
  removeElem(id: number) {
    this.elemService.removeElem(id)
  }

}
