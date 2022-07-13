import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderDetailsService} from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private route:ActivatedRoute,private api:OrderDetailsService) { }
  foodId:any;
  ngOnInit(): void {
    this.foodId=this.route.snapshot.paramMap.get('id');
    this.getFoodData();
  }
  foodDetails:any;
  foodItem:any;
  getFoodData(){
    this.api.getFoodDetails().subscribe((item)=>{
      this.foodDetails=item;
      this.foodItem=this.findFoodData();
    });
  }
  findFoodData(){
    let index=this.foodDetails.findIndex((item: { id: any; })=>item.id==this.foodId);
    return this.foodDetails[index];
  }

}
