import { Component, OnInit } from '@angular/core';
import { ViewService } from '../shared/view.service';


import { ElemsService } from '../shared/elem.service';
import { ViewingService } from '../shared/viewing.service';

import { delay } from 'rxjs';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [ViewService]
})

export class ViewComponent implements OnInit {
   elem: any = [];

   /* com: any = []; */

  constructor(public elements: ViewService,
     /* public comp: ElemsService, */
     public viewing: ViewingService
    ) { }

  ngOnInit(): void {
    this.elem = this.elements.getElement();
    

    /* this.viewing.fetchElems()
    .subscribe(()=>{ }) */

    this.viewing.fetchElems()

    /* this.com = this.comp.fetchElems(); */


    

  

    
  }

}
