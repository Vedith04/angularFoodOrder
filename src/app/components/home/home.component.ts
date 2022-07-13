import { Component, OnInit } from '@angular/core';
import {OrderDetailsService} from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api:OrderDetailsService) { }

  ngOnInit(): void {
    this.getFoodDetails();
  }
  foodDetails:any;

  getFoodDetails(){
    this.api.getFoodDetails().subscribe((res)=>{
      this.foodDetails=res;
    })
  }


}
