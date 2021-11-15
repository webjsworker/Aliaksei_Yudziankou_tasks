import { Component, OnInit} from '@angular/core';
import { delay } from 'rxjs';
import { ElemsService } from '../shared/elem.service';


@Component({
  selector: 'app-elem',
  templateUrl: './elem.component.html',
  styleUrls: ['./elem.component.scss']
})
export class ElemComponent implements OnInit {

  public loading: boolean = true
  public searchString: string = ''
  
   constructor(public elemService: ElemsService)  { }

  ngOnInit(): void {
    this.elemService.fetchElems()
    .pipe(delay(500))
    .subscribe(()=>{
      this.loading = false
    })
  }

  onChange(id: number) {
   this.elemService.onToggle(id)
  }
  removeElem(id: number) {
    this.elemService.removeElem(id)
  }

}
