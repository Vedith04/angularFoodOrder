import { Component, OnInit } from '@angular/core';
import {OrderDetailsService} from 'src/app/services/order-details.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private api:OrderDetailsService,private router:Router) { }

  ngOnInit(): void {
    this.getFoodDetails();
  }

  foodDetails:any;
  getFoodDetails(){
    this.api.getFoodDetails().subscribe((res)=>this.foodDetails=res);
  }

  goToMenuItem(id:any){
    this.router.navigate(['menupage',id]);
  }

}
