import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private http:HttpClient) { }

  getFoodDetails(){
    return this.http.get("http://localhost:3000/foodDetails")
  }
}
