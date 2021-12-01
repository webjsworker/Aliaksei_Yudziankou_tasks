import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  
  public vision: boolean = false;
  public loading: boolean = false;
  public activity: string = ""; 
  public type: string =  '';
  public participants: number = 0  ; 
  public price: number = 0 ; 
  public link: string =  '';
  public key: string =  '';
  public accessibility: number = 0 ;
  
  constructor() { }

  async  getAdvice() {
    this.loading = true;
    const URL = `https://www.boredapi.com/api/activity?participants=1`
    try{
let res = await fetch(URL);
    let advice = await res.json();

    this.loading = false;

    this.activity = advice.activity
    this.type = advice.type
    this.participants = advice.participants
    this.price = advice.price
    this.link = advice.link 
    this.key = advice.key
    this.accessibility = advice.accessibility
    this.vision= true;
      

    /* console.log(advice)
    console.log("prece = " + advice.price) */
} catch (err){
        console.log(err)
    }
  }

  ngOnInit(): void {
  }

}
