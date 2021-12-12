import { Component, OnInit } from '@angular/core';
import { Advice } from '../create/create.component';
import { FindService } from '../shared/find.service';
import { ViewingService } from '../shared/viewing.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
  providers: [FindService]
})
export class FindComponent implements OnInit {
  
  public vision: boolean = false;
  public loading: boolean = false;
  public addCard: boolean = false;
  public activity: string = ""; 
  public type: string =  '';
  public participants: number = 0  ; 
  public price: number = 0 ; 
  public link: string =  '';
  public key: any =  '';
  public accessibility: number = 0 ;
  
  constructor(private findedAdvice: ViewingService,
    public item : FindService) { }

  async  getAdvice() {
 
    this.loading = true;
    this.addCard = false;

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
  
     
} catch (err){
        console.log(err)
    }
  }

  addAdvice(){
    this.addCard = true;
    this.findedAdvice.addE(new Advice(this.activity, this.type, this.participants, this.price, this.link, this.key, this.accessibility)  )
    }

  ngOnInit(): void {
  }

}
